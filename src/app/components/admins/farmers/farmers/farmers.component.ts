import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmers } from '../farmers';

@Component({
	selector: 'app-farmers',
	templateUrl: './farmers.component.html',
	styleUrls: ['./farmers.component.css']
})
export class FarmersAdminComponent implements OnInit {
	farmers: Farmers[];

	constructor(private router: Router) {}

	ngOnInit(): void {
		const ferm = [
			{ id: 1, fname: 'Amos', sname: 'Moyo', username: 'amosmoyo', email: 'amosmoyo5300@gmail.com' },
			{ id: 2, fname: 'Monica', sname: 'Amaya', username: 'amayaa', email: 'amaya5300@gmail.com' },
			{ id: 3, fname: 'Joe', sname: 'Doe', username: 'joedoe', email: 'joedoe5300@gmail.com' },
			{ id: 4, fname: 'Amos', sname: 'Moyo', username: 'amosmoyo', email: 'amosmoyo5300@gmail.com' },
			{ id: 5, fname: 'Amos', sname: 'Moyo', username: 'amosmoyo', email: 'amosmoyo5300@gmail.com' }
		];

		this.farmers = ferm;
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
