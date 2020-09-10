import { TestBed } from '@angular/core/testing';

import { CommonAuthGuard } from './common-auth.guard';

describe('CommonAuthGuard', () => {
  let guard: CommonAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommonAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
