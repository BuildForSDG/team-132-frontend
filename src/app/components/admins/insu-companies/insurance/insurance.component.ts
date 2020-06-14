import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';

@Component({
	selector: 'app-insurance',
	templateUrl: './insurance.component.html',
	styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
	companies: Insurance[];

	constructor(private router: Router) {}

	ngOnInit(): void {
		const comp = [
			{ id: 1, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 },
			{ id: 2, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 },
			{ id: 3, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 },
			{ id: 4, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 }
		];

		this.companies = comp;
	}

	login() {
		this.router.navigate(['/admin/adminlogin']);
	}

	register() {
		this.router.navigate(['/admin/adminregister']);
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
