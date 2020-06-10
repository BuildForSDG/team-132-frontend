import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-admin-register',
	templateUrl: './admin-register.component.html',
	styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
	mouseOver;

	constructor(private router: Router) {}

	ngOnInit() {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
		if (form.invalid) {
			return;
		}

		console.log(form.value);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
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
}
