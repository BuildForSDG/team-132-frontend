/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Itoken } from 'src/app/user';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit, OnDestroy {
	mouseOver;

	loading;

	authStatusSub: Subscription;

	constructor(
		private router: Router,
		private userservice: UserService,
		private route: ActivatedRoute,
		private spinner: NgxSpinnerService
	) {}

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
		const user = {
			email: form.value.email,
			password: form.value.password
		};

		console.log(form.value);
		this.userservice.login(user);

		// this.router.navigate(['/admin/panel/home']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}

	ngOnDestroy(): void {
		this.authStatusSub.unsubscribe();
	}
}
