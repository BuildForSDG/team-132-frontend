/* eslint-disable dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { ProductsService } from 'src/app/services/products.service';
// eslint-disable-next-line import/no-unresolved
import { Iproduct, IproductResolved } from 'src/app/iproduct';
// eslint-disable-next-line import/no-unresolved
import { ProductsCartService } from 'src/app/services/products-cart.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	product: Iproduct;

	errorMessage = '';

	param;

	pageTitle: string;

	rating;

	starWidth: number;

	constructor(
		private productservice: ProductsService,
		private route: ActivatedRoute,
		private cartservice: ProductsCartService
	) {}

	ngOnInit(): void {
		// this.param = +this.route.snapshot.paramMap.get('id');

		/* if (this.param) {
			this.productservice.getProduct(this.param).subscribe({
				next: (product) => {
					this.product = product;
				}
			});
		} */

		// tslint:disable-next-line: no-string-literal
		const productResolver: IproductResolved = this.route.snapshot.data['productResolve'];
		this.errorMessage = productResolver.error;
		this.onProductRetrival(productResolver.product);
	}

	onProductRetrival(product): void {
		this.product = product;
		if (this.product) {
			this.pageTitle = `${this.product.name}`;
		} else {
			this.pageTitle = `No product found`;
		}
	}

	addToCart(item): void {
		this.cartservice.addToCart(item);
	}

	ngOnChanges(): void {
		if (this.product) {
			this.rating = this.product.productCode;
			this.starWidth = this.rating * (75 / 5);
		}
	}
}
