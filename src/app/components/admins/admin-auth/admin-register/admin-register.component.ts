import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-admin-register',
	templateUrl: './admin-register.component.html',
	styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
	mouseOver;

	loading = false;

	constructor(private router: Router, private userservice: UserService) {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
		if (form.invalid) {
			return;
		}

		this.loading = true;

		const id = form.value.idNumber ? form.value.idNumber : '';
		const altphone = form.value.alternatePhone ? form.value.alternatePhone : '';

		const user = {
			firstname: form.value.firstname,
			lastname: form.value.lastname,
			email: form.value.email,
			password: form.value.passwordGroup.password,
			phone: form.value.phoneNumber,
			role: form.value.role,
			idNumber: id,
			alternatePhone: altphone
		};

		console.log(form.value);
		this.userservice.signup(user).subscribe({
			next: (data) => {
				console.log(data);
				this.router.navigate(['/admin/panel/login']);
				this.loading = false;
			},
			error: (err) => {
				console.log(err.message);
			}
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/admin/panel/login']);
	}
}
