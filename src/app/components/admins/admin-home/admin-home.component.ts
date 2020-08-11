import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-home',
	templateUrl: './admin-home.component.html',
	styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
	home = false;

	profile = false;

	agroComp = false;

	insurance = false;

	farmers = false;

	constructor(private router: Router) {}

	ngOnInit(): void {}

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
