import {TestBed} from '@angular/core/testing';
import {DirNewerBindings, DirOlderDirectives} from './older-directives';

describe('NgClass and NgStyle compared with bindings', () => {
  for (const type of [DirOlderDirectives, DirNewerBindings]) {
    it(`${type.name} sets the same classes and styles`, async () => {
      const fixture = TestBed.createComponent(type);
      await fixture.whenStable();
      const [task, text] = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('p'));
      expect(task.className).toBe('urgent');
      expect(text.style.fontSize).toBe('20px');

      fixture.componentInstance.done.set(true);
      await fixture.whenStable();
      expect(task.className).toBe('done');
    });
  }
});
