import { FilterByCategoryPipe } from '../pipe/filter-by-category.pipe';

describe('FilterByCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByCategoryPipe();
    expect(pipe).toBeTruthy();
  });
});
