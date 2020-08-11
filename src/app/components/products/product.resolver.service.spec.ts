import { TestBed } from '@angular/core/testing';

import { Product.ResolverService } from './product.resolver.service';

describe('Product.ResolverService', () => {
  let service: Product.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
