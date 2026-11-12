# Fix demos

One test per fix in [FIXES.md](../../FIXES.md). Each fails on stock Angular 22.2.6 and passes on
this fork. To see the difference in one of your apps (Angular CLI 22.2, Vitest):

```shell
mkdir -p ../your-app/src/app/fork-fixes
cp fork-tools/fix-demos/*.spec.ts ../your-app/src/app/fork-fixes/
(cd ../your-app && npx ng test --watch=false)       # stock: 4 tests fail
node fork-tools/use.mjs ../your-app
(cd ../your-app && npx ng test --watch=false)       # fork: they pass
node fork-tools/restore.mjs ../your-app
rm -r ../your-app/src/app/fork-fixes
```

| File                            | Fix                                                                 |
| ------------------------------- | ------------------------------------------------------------------- |
| `host-nesting.spec.ts`          | 1. `&` selectors nested in `:host` (needs a JIT-compiled component) |
| `field-tree-in.spec.ts`         | 2. the `in` operator on a signal forms field tree                   |
| `select-option-text.spec.ts`    | 3. a `[formField]` select resyncs when an option's text changes     |
| `ng-form-removed-group.spec.ts` | 4. `NgForm` does not throw when a parent group is gone              |

Tested on 2026-11-13 with a new `ng new` app (Angular CLI 22.2.7, npm): 4 of these tests fail on
22.2.6 and all pass on `22.2.6+sha-bcab657`.
