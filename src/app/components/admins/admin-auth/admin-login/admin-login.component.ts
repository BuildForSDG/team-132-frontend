import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
	mouseOver;

	constructor(private router: Router) {}

	ngOnInit() {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
		if (form.invalid) {
			return;
		}

		console.log(form.value);
		this.router.navigate(['/admin/main']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
