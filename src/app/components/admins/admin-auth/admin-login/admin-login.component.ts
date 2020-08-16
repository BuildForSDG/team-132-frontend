/* eslint-disable import/no-unresolved */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Itoken } from 'src/app/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
	mouseOver;

	loading;

	constructor(
		private router: Router,
		private userservice: UserService,
		private route: ActivatedRoute,
		private spinner: NgxSpinnerService
	) {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
		if (form.invalid) {
			return;
		}
		this.loading = true;
		const user = {
			email: form.value.email,
			password: form.value.password
		};

		console.log(form.value);
		this.userservice.login(user).subscribe({
			next: (data: Itoken) => {
				console.log(data);
				this.userservice.storeToke(data.token);
				this.loading = false;
			},
			error: (err) => {
				console.log(err.message);
			}
		});

		// this.router.navigate(['/admin/panel/home']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
