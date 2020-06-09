import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { ProductsCartService } from 'src/app/services/products-cart.service';
import { Subscription } from 'rxjs';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, OnChanges {
	items: unknown;

	itemsSub: Subscription;

	total;

	product: Iproduct;

	constructor(private cartservice: ProductsCartService) {}

	ngOnInit(): void {
		this.items = this.cartservice.getItems();
		this.itemsSub = this.cartservice.getItemListener().subscribe({
			next: (product) => {
				this.items = product;
			}
		});
	}

	ngOnChanges(): void {
		this.cartservice.getTotal();
		this.clearCart();
	}

	clearCart(): void {
		this.items = [];
		this.cartservice.clearCart();
	}

	ngOnDestroy(): void {
		this.itemsSub.unsubscribe();
	}
}
