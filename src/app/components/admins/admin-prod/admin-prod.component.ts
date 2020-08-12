import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { ProductsService } from 'src/app/services/products.service';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-admin-prod',
	templateUrl: './admin-prod.component.html',
	styleUrls: ['./admin-prod.component.css']
})
export class AdminProdComponent implements OnInit {
	products: Iproduct[];

	imageWidth = 50;

	imageMargin = 2;

	showImage = false;

	errorMessage = '';

	constructor(private router: Router, private productService: ProductsService) {}

	ngOnInit(): void {
		this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
			}
		});
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}
}
