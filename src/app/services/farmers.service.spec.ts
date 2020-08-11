import { TestBed } from '@angular/core/testing';

import { FarmersService } from './farmers.service';

describe('FarmersService', () => {
  let service: FarmersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
