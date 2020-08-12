/* eslint-disable import/no-unresolved */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
	templateUrl: './clients-signup.component.html',
	styleUrls: ['./clients-signup.component.css']
})
export class ClientsSignupComponent {
	mouseOver;

	isTrue = false;

	constructor(private router: Router, private userservice: UserService) {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
		if (form.invalid) {
			return;
		}

		const user = {
			firstname: form.value.firstname,
			lastname: form.value.lastname,
			email: form.value.email,
			password: form.value.passwordGroup.password,
			phoneNumber: form.value.phoneNumber,
			role: form.value.role
		};

		this.isTrue = true;
		console.log(form.value);
		this.userservice.signup(user).subscribe({
			next: (data) => {
				console.log(data);
			}
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
