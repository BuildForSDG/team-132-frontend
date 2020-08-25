/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Itoken } from 'src/app/user';
import { CommonUserService } from 'src/app/services/commonuser';
import { Subscription } from 'rxjs';
// eslint-disable-next-line import/no-unresolved

@Component({
	selector: 'app-clints',
	templateUrl: './clints.component.html',
	styleUrls: ['./clints.component.css']
})
export class ClintsComponent implements OnInit, OnDestroy {
	mouseOver;

	loading;

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

		console.log(form.value);
		const user = {
			email: form.value.email,
			password: form.value.password
		};

		this.userservice.login(user);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}

	ngOnDestroy(): void {
		this.authStatusSub.unsubscribe();
	}
}
