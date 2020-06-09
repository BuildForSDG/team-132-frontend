import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	products = [];

	constructor() {}

	getProducts() {
		return this.products;
	}

	addProducts(product) {
		console.log(product);
		this.products.push(product);
	}
}
