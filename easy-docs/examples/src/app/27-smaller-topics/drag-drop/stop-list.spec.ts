import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {TestBed} from '@angular/core/testing';
import {DndStopList} from './stop-list';

describe('DndStopList', () => {
  it('makes the list and its items draggable', async () => {
    const fixture = TestBed.createComponent(DndStopList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('ol')?.classList).toContain('cdk-drop-list');
    expect(page.querySelectorAll('li.cdk-drag').length).toBe(4);
  });

  it('moves a stop when it is dropped at a new place', async () => {
    const fixture = TestBed.createComponent(DndStopList);
    await fixture.whenStable();

    // A real drag needs a mouse or a finger. The test calls the drop handler directly.
    fixture.componentInstance.drop({previousIndex: 0, currentIndex: 2} as CdkDragDrop<string[]>);
    await fixture.whenStable();

    const texts = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('li')).map(
      (li) => li.textContent?.trim(),
    );
    expect(texts).toEqual(['Gur-e-Amir', 'Bibi-Khanym Mosque', 'Registan', 'Siab Bazaar']);
  });
});
