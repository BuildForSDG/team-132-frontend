/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonUserService } from 'src/app/services/commonuser';
import { Subscription } from 'rxjs';

@Component({
	templateUrl: './clients-signup.component.html',
	styleUrls: ['./clients-signup.component.css']
})
export class ClientsSignupComponent implements OnInit, OnDestroy {
	mouseOver;

	loading = false;

	authStatusSub: Subscription;

	constructor(private router: Router, private userservice: CommonUserService) {}

	ngOnInit(): void {
		this.authStatusSub = this.userservice.getAuthStatusListener().subscribe({
			next: (data) => {
				this.loading = data;
			}
		});
	}

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
		this.userservice.signup(user);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/user/login']);
	}

	ngOnDestroy(): void {
		this.authStatusSub.unsubscribe();
	}
}
