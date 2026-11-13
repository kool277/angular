import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {App} from './app';
import {routes} from './app.routes';
import {chapterDemos} from './demos';

describe('App', () => {
  it('shows the title of the examples', async () => {
    TestBed.configureTestingModule({providers: [provideRouter(routes)]});
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toBe('Easy Angular examples');
  });

  it('lists a demo page for chapters 1 to 27, except routing', async () => {
    TestBed.configureTestingModule({providers: [provideRouter(routes)]});
    const harness = await RouterTestingHarness.create('/');
    const headings = Array.from(harness.routeNativeElement!.querySelectorAll('h2'));
    expect(headings.length).toBe(26);
    expect(chapterDemos.every((chapter) => chapter.demos.length > 0)).toBe(true);
  });

  it('opens a demo page', async () => {
    TestBed.configureTestingModule({providers: [provideRouter(routes)]});
    const harness = await RouterTestingHarness.create('/07/signals-counter');
    expect(harness.routeNativeElement!.textContent).toContain('0');
  });
});
