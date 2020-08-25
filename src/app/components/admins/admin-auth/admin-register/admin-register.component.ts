import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin-register',
	templateUrl: './admin-register.component.html',
	styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit, OnDestroy {
	mouseOver;

	loading = false;

	authStatusSub: Subscription;

	constructor(private router: Router, private userservice: UserService) {}

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
		console.log(user);
		this.userservice.signup(user);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/admin/panel/login']);
	}

	ngOnDestroy(): void {
		this.authStatusSub.unsubscribe();
	}
}
