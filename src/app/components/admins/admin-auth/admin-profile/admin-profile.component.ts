import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-profile',
	templateUrl: './admin-profile.component.html',
	styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
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
