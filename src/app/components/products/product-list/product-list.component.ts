/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
	animations: [
		trigger('fade', [
			transition('void => *', [
				style({ backgroundColor: 'eee', opacity: 0 }),
				animate(5000, style({ backgroundColor: 'fff', opacity: 1 }))
			])
		])
	]
})
export class ProductListComponent implements OnInit {
	products: Iproduct[];

	filteredArr: Iproduct[];

	// tslint:disable-next-line: variable-name
	_listfilter: string;

	get listfilter() {
		return this._listfilter;
	}

	set listfilter(value: string) {
		this._listfilter = value;
		this.filteredArr = this.listfilter ? this.performFilter(this.listfilter) : this.products;
	}

	constructor(private router: Router, private route: ActivatedRoute) {
		this.listfilter = '';
	}

	ngOnInit(): void {
		this.route.data.subscribe({
			next: (data) => {
				// tslint:disable-next-line: no-string-literal
				this.products = data['products'];
				this.filteredArr = this.products;
			}
		});

		/* this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
				this.filteredArr = this.products;
			}
		}); */
	}

	private performFilter(value: string): Iproduct[] {
		// eslint-disable-next-line no-param-reassign
		value = value.toLocaleLowerCase();
		return this.products.filter((x: Iproduct) => x.name.toLocaleLowerCase().indexOf(value) !== -1);
	}
}
