/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Iproduct } from '../iproduct';

@Injectable({
	providedIn: 'root'
})
export class ProductsCartService {
	private cartProductList: Iproduct[] = [];

	private cartItem = 0;

	constructor(private http: HttpClient, private router: Router) {}

	getItems() {
		return [...this.cartProductList];
	}

	getCartItems() {
		return this.cartItem;
	}

	getTotal() {
		if (this.cartProductList.length > 0) {
			const total = this.cartProductList.map((x) => x.price * x.num).reduce((acc, cur) => acc + cur, 0);
			return `${total}`;
		}
		return null;
	}

	addToCart(product) {
		const productExistInCart = this.cartProductList.find(({ name }) => name === product.name); // find product by name
		if (!productExistInCart) {
			this.cartProductList.push({ ...product, num: 1 }); // enhance "porduct" opject with "num"
			return;
		}
		productExistInCart.num = 0;
		productExistInCart.num += 1;
		this.cartItem = productExistInCart.num;
		this.router.navigate(['/services/products/cart']);
	}

	removeOneItem(product) {
		this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name);
		const data = this.cartProductList;
		return [...data];
	}

	shopCartitem(items) {
		this.cartItem = items;
		this.getCartItems();
	}
}
