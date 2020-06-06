import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
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

	constructor(private productService: ProductsService, private router: Router) {
		this.listfilter = '';
	}

	ngOnInit() {
		this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
				this.filteredArr = this.products;
			}
		});
	}

	private performFilter(value: string): Iproduct[] {
		// eslint-disable-next-line no-param-reassign
		value = value.toLocaleLowerCase();
		return this.products.filter((x: Iproduct) => x.name.toLocaleLowerCase().indexOf(value) !== -1);
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	OnRouting(id) {
		this.productService.getProduct(+id).subscribe({
			next: (x) => {
				this.router.navigate([`/home/products/${id}`]);
			}
		});
	}
}
