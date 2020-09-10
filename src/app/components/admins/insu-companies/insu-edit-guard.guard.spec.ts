import { TestBed } from '@angular/core/testing';

import { InsuEditGuardGuard } from './insu-edit-guard.guard';

describe('InsuEditGuardGuard', () => {
  let guard: InsuEditGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InsuEditGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
