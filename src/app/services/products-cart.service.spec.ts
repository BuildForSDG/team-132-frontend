import { TestBed } from '@angular/core/testing';

import { ProductsCartService } from './products-cart.service';

describe('ProductsCartService', () => {
	let service: ProductsCartService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ProductsCartService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
