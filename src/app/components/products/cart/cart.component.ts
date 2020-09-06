/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { ProductsCartService } from 'src/app/services/products-cart.service';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	total;

	@Input() product: Iproduct;

	@Output() productRemoved = new EventEmitter();

	@Output() productNum = new EventEmitter();

	constructor(private cartservice: ProductsCartService) {}

	ngOnInit(): void {
		/* this.items = this.cartservice.getItems();
		this.itemsSub = this.cartservice.getItemListener().subscribe({
			next: (product) => {
				this.items = product;
			}
		}); */
	}

	modelChanged(product) {
		if (this.product.num === 0) {
			this.productRemoved.emit(this.product);
		} else {
			this.productNum.emit(this.product);
		}
	}

	totalUnit() {
		const price = this.product.num * this.product.price;
		return price;
	}
}
