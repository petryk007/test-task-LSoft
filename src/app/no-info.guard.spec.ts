import { TestBed } from '@angular/core/testing';

import { NoInfoGuard } from './no-info.guard';

describe('NoInfoGuard', () => {
  let guard: NoInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
