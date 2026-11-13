import {TestBed} from '@angular/core/testing';
import {FirstApp} from './first-app';

describe('FirstApp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstApp],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FirstApp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(FirstApp);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-first-app');
  });

  it('should render the new paragraph', async () => {
    const fixture = TestBed.createComponent(FirstApp);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toBe('This is my first Angular app.');
  });
});
