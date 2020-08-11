/* eslint-disable dot-notation */
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
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

	constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.data.subscribe({
			next: (data) => {
				// tslint:disable-next-line: no-string-literal
				this.products = data['products'];
				this.filteredArr = this.products.filter((x) => x.productId < 3);
				this.productOne = this.filteredArr[0];
				this.productTwo = this.filteredArr[1];
			}
		});

		/* this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
			}
		}); */
	}
}
