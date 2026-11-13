#!/usr/bin/env node
// Checks the easy guide in `easy-docs/`.
//
//   node fork-tools/check-docs.mjs [docs-folder]
//
// It fails (exit code 1) when:
//   - a code block differs from the example file it names,
//   - a code block names no example file and is not marked as wrong code,
//   - a relative link points to a file or heading that does not exist,
//   - a chapter lacks one of the ten parts, or has them in the wrong order.
//
// How a code block names its example file: put an HTML comment on the line before the block.
//
//   <!-- example: src/app/04-components/greeting.ts -->           the whole file
//   <!-- example: src/app/04-components/greeting.ts#imports -->   one region of the file
//   <!-- wrong -->                                                 wrong code (chapter part 7)
//
// Paths are relative to `easy-docs/examples/`. A region starts at a line that contains
// `#docregion <name>` and ends at a line that contains `#enddocregion <name>`. Lines with
// `#docregion` or `#enddocregion` are never part of what the guide shows.
//
// Blocks in these languages are commands, output or diagrams, not example code, and need no
// file: shell, bash, sh, console, text, mermaid.
//
// No dependencies: plain Node.js 20 or newer.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.resolve(process.argv[2] ?? path.join(repoRoot, 'easy-docs'));
const examplesDir = path.join(docsDir, 'examples');

const CHAPTER_FILE = /^\d\d-[a-z0-9-]+\.md$/;
const PARTS = [
  'Before this chapter',
  'In one sentence',
  'Why you need it',
  'Smallest example',
  'How it works',
  'A realistic example',
  'Common mistakes',
  'Try it yourself',
  'Remember',
  'Read more',
];
const NO_FILE_LANGUAGES = new Set(['shell', 'bash', 'sh', 'console', 'text', 'mermaid']);

const problems = [];
const report = (file, line, message) =>
  problems.push(`${path.relative(repoRoot, file)}:${line}: ${message}`);

/** Lists the Markdown files of the guide, without the examples workspace and its packages. */
function markdownFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.') || entry.name === 'dist') {
        continue;
      }
      result.push(...markdownFiles(full));
    } else if (entry.name.endsWith('.md')) {
      result.push(full);
    }
  }
  return result.sort();
}

/** Removes trailing spaces, outer blank lines and the indentation all lines share. */
function normalize(text) {
  const lines = text
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.replace(/\s+$/, ''));
  while (lines.length && lines[0] === '') lines.shift();
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  const indents = lines.filter((l) => l !== '').map((l) => l.match(/^ */)[0].length);
  const common = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(common)).join('\n');
}

const isMarkerLine = (line) => /#(end)?docregion\b/.test(line);

/** Returns the text that the guide may show for `file` or `file#region`, or an error. */
function exampleText(reference) {
  const [relativeFile, region] = reference.split('#');
  const file = path.join(examplesDir, relativeFile);
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    return {error: `example file not found: ${relativeFile}`};
  }
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  if (!region) {
    return {text: normalize(lines.filter((l) => !isMarkerLine(l)).join('\n'))};
  }
  const start = lines.findIndex((l) => new RegExp(`#docregion\\s+${region}\\b`).test(l));
  const end = lines.findIndex((l) => new RegExp(`#enddocregion\\s+${region}\\b`).test(l));
  if (start === -1 || end === -1 || end < start) {
    return {error: `region "${region}" not found in ${relativeFile}`};
  }
  return {
    text: normalize(
      lines
        .slice(start + 1, end)
        .filter((l) => !isMarkerLine(l))
        .join('\n'),
    ),
  };
}

/** GitHub's heading anchors: lower case, punctuation removed, spaces turned into hyphens. */
function anchorsOf(markdown) {
  const anchors = new Set();
  const seen = new Map();
  let inFence = false;
  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const heading = line.match(/^#{1,6}\s+(.*?)\s*#*\s*$/);
    if (!heading) continue;
    // HTML tags are dropped, but text in code spans stays (`<iframe>` gives "iframe").
    const base = heading[1]
      .split(/(`[^`]*`)/)
      .map((part) => (part.startsWith('`') ? part : part.replace(/<[^>]+>/g, '')))
      .join('')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s_-]/gu, '')
      .replace(/ /g, '-');
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    anchors.add(count === 0 ? base : `${base}-${count}`);
  }
  for (const match of markdown.matchAll(/<a\s+(?:name|id)="([^"]+)"/g)) anchors.add(match[1]);
  return anchors;
}

function checkCodeBlocks(file, lines) {
  let lastComment = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fence = line.match(/^(\s*)(```+|~~~+)\s*([\w+-]*)/);
    if (!fence) {
      const comment = line.match(/^\s*<!--\s*(example:\s*(\S+)|wrong)\s*-->\s*$/);
      if (comment) {
        lastComment = {kind: comment[2] ? 'example' : 'wrong', reference: comment[2], line: i};
      } else if (line.trim() !== '') {
        lastComment = null;
      }
      continue;
    }
    const [, indent, marker, language] = fence;
    const startLine = i;
    const body = [];
    i++;
    while (i < lines.length && !lines[i].startsWith(indent + marker)) {
      body.push(lines[i].startsWith(indent) ? lines[i].slice(indent.length) : lines[i]);
      i++;
    }
    if (i >= lines.length) {
      report(file, startLine + 1, 'code block is never closed');
      return;
    }
    const comment = lastComment;
    lastComment = null;
    if (comment?.kind === 'wrong') continue;
    if (comment?.kind === 'example') {
      const expected = exampleText(comment.reference);
      if (expected.error) {
        report(file, comment.line + 1, expected.error);
      } else if (normalize(body.join('\n')) !== expected.text) {
        const shown = normalize(body.join('\n')).split('\n');
        const real = expected.text.split('\n');
        const at = shown.findIndex((l, n) => l !== real[n]);
        const n = at === -1 ? Math.min(shown.length, real.length) : at;
        report(
          file,
          startLine + 2 + n,
          `code block differs from ${comment.reference} at line ${n + 1} of the block:\n` +
            `    guide:   ${JSON.stringify(shown[n] ?? '<end of block>')}\n` +
            `    example: ${JSON.stringify(real[n] ?? '<end of file>')}`,
        );
      }
      continue;
    }
    if (!NO_FILE_LANGUAGES.has(language.toLowerCase())) {
      report(
        file,
        startLine + 1,
        `code block (${language || 'no language'}) names no example file; ` +
          'add <!-- example: path --> or <!-- wrong --> on the line before it',
      );
    }
  }
}

function checkLinks(file, text) {
  const withoutCode = text.replace(/^(\s*)(```+|~~~+)[\s\S]*?^\1\2\s*$/gm, (m) =>
    m.replace(/[^\n]/g, ' '),
  );
  const lines = withoutCode.split('\n');
  lines.forEach((line, index) => {
    const inline = line.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
    for (const match of inline.matchAll(/\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) {
      const target = match[1];
      if (/^[a-z][a-z0-9+.-]*:/i.test(target)) continue; // https:, mailto: ...
      const [targetPath, anchor] = target.split('#');
      const resolved = targetPath ? path.resolve(path.dirname(file), decodeURI(targetPath)) : file;
      if (!fs.existsSync(resolved)) {
        report(file, index + 1, `broken link: ${target}`);
        continue;
      }
      if (anchor && resolved.endsWith('.md')) {
        const anchors = anchorsOf(fs.readFileSync(resolved, 'utf8'));
        if (!anchors.has(decodeURIComponent(anchor))) {
          report(
            file,
            index + 1,
            `broken link: no heading "#${anchor}" in ${targetPath || 'this file'}`,
          );
        }
      }
    }
  });
}

function checkParts(file, lines) {
  const headings = [];
  let inFence = false;
  lines.forEach((line, index) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const h2 = !inFence && line.match(/^##\s+(.*?)\s*$/);
    if (h2) headings.push({text: h2[1], line: index + 1});
  });
  let position = 0;
  for (const [n, part] of PARTS.entries()) {
    const wanted = `${n + 1}. ${part}`;
    const found = headings.findIndex((h, k) => k >= position && h.text === wanted);
    if (found === -1) {
      const anywhere = headings.find((h) => h.text === wanted);
      report(
        file,
        anywhere?.line ?? 1,
        anywhere ? `part "${wanted}" is out of order` : `missing part "## ${wanted}"`,
      );
    } else {
      position = found + 1;
    }
  }
}

if (!fs.existsSync(docsDir)) {
  console.error(`No such folder: ${docsDir}`);
  process.exit(1);
}
const files = markdownFiles(docsDir).filter((f) => !f.startsWith(examplesDir + path.sep));
let chapters = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');
  checkCodeBlocks(file, lines);
  checkLinks(file, text);
  if (path.dirname(file) === docsDir && CHAPTER_FILE.test(path.basename(file))) {
    chapters++;
    checkParts(file, lines);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\ncheck-docs: ${problems.length} problem(s) in ${files.length} file(s).`);
  process.exit(1);
}
console.log(`check-docs: OK (${files.length} files, ${chapters} chapters).`);
