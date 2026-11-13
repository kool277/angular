import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FirstAppWelcome} from './welcome';

describe('FirstAppWelcome', () => {
  let component: FirstAppWelcome;
  let fixture: ComponentFixture<FirstAppWelcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAppWelcome],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstAppWelcome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the welcome text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('This part of the page is the Welcome component.');
  });
});
