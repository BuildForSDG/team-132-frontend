import { TestBed } from '@angular/core/testing';

import { AgroCompaniesService } from './agro-companies.service';

describe('AgroCompaniesService', () => {
  let service: AgroCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgroCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
