/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { Component, Output, EventEmitter, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';
import { ProductsCartService } from 'src/app/services/products-cart.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-shoppingcart',
	templateUrl: './shoppingcart.component.html',
	styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit, OnChanges {
	products: Iproduct[];

	@Output() productRemoved = new EventEmitter();

	totalPrice;

	totalPrice2;

	navData;

	private productNumber: Iproduct;

	constructor(private cart: ProductsCartService) {}

	productNum(num) {
		this.productNumber = num;
		this.ngOnChanges();
		return num;
	}

	ngOnInit(): void {
		this.products = this.cart.getItems();
		this.calcTotal();
		this.navData = this.calcTotal();
		this.cart.shopCartitem(this.navData);
		this.totalPrice = this.cart.getTotal();
		this.totalPrice2 = this.totalPrice;
		console.log('navbar', this.getNavData());
	}

	calcTotal() {
		return this.products.reduce((acc, prod) => {
			return (acc += prod.num);
		}, 0);
	}

	getNavData() {
		return this.navData;
	}

	removeProduct(product) {
		this.products = this.cart.removeOneItem(product);
		const newProducts = [...this.products];
		const data = newProducts.map((x) => x.price * x.num).reduce((acc, cur) => acc + cur, 0);
		this.navData = this.products.reduce((acc, prod) => {
			return (acc += prod.num);
		}, 0);
		this.cart.shopCartitem(this.navData);
		this.totalPrice2 = data;
	}

	ngOnChanges() {
		if (this.productNumber) {
			const index = this.products.findIndex((x) => x.productId === this.productNumber.productId);
			this.products[index] = this.productNumber;
			const newProducts = [...this.products];
			const data = newProducts.map((x) => x.price * x.num).reduce((acc, cur) => acc + cur, 0);
			this.totalPrice2 = data;
			this.navData = this.products.reduce((acc, prod) => {
				return (acc += prod.num);
			}, 0);
			this.cart.shopCartitem(this.navData);
		}
	}
}
