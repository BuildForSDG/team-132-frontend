import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	products: Iproduct[];

	productOne: Iproduct;

	productTwo: Iproduct;

	filteredArr: Iproduct[];

	constructor(private productService: ProductsService, private router: Router) {}

	ngOnInit() {
		this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
				this.filteredArr = this.products.filter((x) => x.productId < 3);
				this.productOne = this.filteredArr[0];
				this.productTwo = this.filteredArr[1];
			}
		});
	}
}
