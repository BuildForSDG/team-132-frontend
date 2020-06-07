import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Iproduct } from '../iproduct';

@Injectable({
	providedIn: 'root'
})
export class ProductsCartService {
	private items: Iproduct[] = [];

	private itemsUpdate = new Subject<Iproduct[]>();

	constructor(private http: HttpClient, private router: Router) {}

	getItems() {
		return [...this.items];
	}

	getItemListener() {
		return this.itemsUpdate.asObservable();
	}

	getTotal() {
		if (this.items.length > 0) {
			const total = this.items.map((x) => x.price).reduce((acc, cur) => acc + cur, 0);
			return `${total / 100}`;
		}
		return null;
	}

	addToCart(product) {
		const item: Iproduct = product;
		this.items.push(item);
		this.itemsUpdate.next([...this.items]);
		this.router.navigate(['/products/cart']);
	}

	clearCart() {
		this.items = [];
		return this.items;
	}
}
