import {TestBed} from '@angular/core/testing';
import {SignalsSearch} from './search';

describe('SignalsSearch', () => {
  it('waits until the text stops changing before it filters', async () => {
    const fixture = TestBed.createComponent(SignalsSearch);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const cities = () => Array.from(page.querySelectorAll('li')).map((li) => li.textContent);
    expect(cities().length).toBe(7);

    const input = page.querySelector('input')!;
    input.value = 'kh';
    input.dispatchEvent(new Event('input'));
    // Wait for Angular to update the page, but less than 300 ms.
    await new Promise((resolve) => setTimeout(resolve, 50));
    // Still the old list, and a waiting message.
    expect(cities().length).toBe(7);
    expect(page.querySelector('.status')).not.toBeNull();

    await new Promise((resolve) => setTimeout(resolve, 400));
    await fixture.whenStable();
    expect(cities()).toEqual(['Bukhara', 'Khiva']);
    expect(page.querySelector('.status')).toBeNull();
  });
});
