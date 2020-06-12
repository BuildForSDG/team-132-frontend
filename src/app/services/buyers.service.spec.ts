import { TestBed } from '@angular/core/testing';

import { BuyersService } from './buyers.service';

describe('BuyersService', () => {
  let service: BuyersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
