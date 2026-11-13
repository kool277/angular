import {DeferBlockBehavior, DeferBlockState, TestBed} from '@angular/core/testing';
import {shopImageLoader} from './image-loader';
import {PerfProductPage} from './product-page';

describe('PerfProductPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({deferBlockBehavior: DeferBlockBehavior.Manual});
  });

  it('loads the main photo first, through the image loader', async () => {
    const fixture = TestBed.createComponent(PerfProductPage);
    await fixture.whenStable();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe('https://images.example.com/boots.jpg');
    expect(img.getAttribute('srcset')).toBe(
      'https://images.example.com/boots.jpg?w=600 1x, https://images.example.com/boots.jpg?w=1200 2x',
    );
    expect(img.getAttribute('fetchpriority')).toBe('high');
  });

  it('builds image URLs with the wanted width', () => {
    expect(shopImageLoader({src: '/boots.jpg', width: 300})).toBe(
      'https://images.example.com/boots.jpg?w=300',
    );
  });

  it('has two @defer blocks that start empty or with a placeholder', async () => {
    const fixture = TestBed.createComponent(PerfProductPage);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(await fixture.getDeferBlocks()).toHaveLength(2);
    expect(element.querySelector('app-perf-size-guide')).toBeNull();
    expect(element.querySelector('section')!.textContent).toBe('Reviews');
  });

  it('shows the reviews, or a message when they fail to load', async () => {
    const fixture = TestBed.createComponent(PerfProductPage);
    await fixture.whenStable();
    const [, reviews] = await fixture.getDeferBlocks();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');

    await reviews.render(DeferBlockState.Loading);
    expect(section.textContent).toBe('Loading reviews…');

    await reviews.render(DeferBlockState.Complete);
    expect(section.textContent).toContain('Very comfortable.');
  });

  it('shows the @error block when the reviews cannot be loaded', async () => {
    const fixture = TestBed.createComponent(PerfProductPage);
    await fixture.whenStable();
    const [, reviews] = await fixture.getDeferBlocks();
    await reviews.render(DeferBlockState.Error);
    expect(fixture.nativeElement.querySelector('section').textContent).toContain(
      'could not be loaded',
    );
  });
});
