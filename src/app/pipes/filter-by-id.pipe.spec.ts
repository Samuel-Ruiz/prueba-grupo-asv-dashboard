import { FilterByAmbulanceIdPipe } from './filter-by-id.pipe';

describe('FilterByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByAmbulanceIdPipe();
    expect(pipe).toBeTruthy();
  });
});
