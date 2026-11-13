import {TestBed} from '@angular/core/testing';
import {I18nTicketSummary} from './ticket-summary';

describe('I18nTicketSummary', () => {
  it('picks the plural case that matches the number', async () => {
    const fixture = TestBed.createComponent(I18nTicketSummary);
    const text = () =>
      (fixture.nativeElement as HTMLElement).querySelector('.count')?.textContent?.trim();
    await fixture.whenStable();
    expect(text()).toBe('No tickets yet.');

    fixture.componentRef.setInput('count', 1);
    await fixture.whenStable();
    expect(text()).toBe('One ticket.');

    fixture.componentRef.setInput('count', 5);
    await fixture.whenStable();
    expect(text()).toBe('5 tickets.');
  });

  it('picks the select case that matches the text, or other', async () => {
    const fixture = TestBed.createComponent(I18nTicketSummary);
    const text = () =>
      (fixture.nativeElement as HTMLElement).querySelector('.type')?.textContent?.trim();
    fixture.componentRef.setInput('kind', 'child');
    await fixture.whenStable();
    expect(text()).toBe('Ticket type: child');

    fixture.componentRef.setInput('kind', 'student');
    await fixture.whenStable();
    expect(text()).toBe('Ticket type: other');
  });
});
