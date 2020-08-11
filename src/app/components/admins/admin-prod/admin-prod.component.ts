import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
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

	ngOnInit() {
		this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
			}
		});
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	  }

	homeF() {
		this.router.navigate(['/admin/main']);
	}

	profileF() {
		this.router.navigate(['/admin/adminprofile']);
	}

	agroCompF() {
		this.router.navigate(['/admin/agrocompanies']);
	}

	insuranceF() {
		this.router.navigate(['/admin/insurance']);
	}

	farmersF() {
		this.router.navigate(['/admin/farmers']);
	}

	productsF() {
		this.router.navigate(['/admin/products']);
	}
}
