import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { ProductsService } from 'src/app/services/products.service';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';
// eslint-disable-next-line import/no-unresolved
import { ProductsCartService } from 'src/app/services/products-cart.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	product: Iproduct;

	param;

	constructor(
		private productservice: ProductsService,
		private route: ActivatedRoute,
		private cartservice: ProductsCartService
	) {}

	ngOnInit(): void {
		this.param = +this.route.snapshot.paramMap.get('id');

		if (this.param) {
			this.productservice.getProduct(this.param).subscribe({
				next: (product) => {
					this.product = product;
				}
			});
		}
	}

	addToCart(item): void {
		this.cartservice.addToCart(item);
	}
}
