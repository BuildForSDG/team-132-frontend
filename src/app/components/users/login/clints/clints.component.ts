/* eslint-disable import/no-unresolved */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Itoken } from 'src/app/user';
import { CommonUserService } from 'src/app/services/commonuser';
// eslint-disable-next-line import/no-unresolved

@Component({
	selector: 'app-clints',
	templateUrl: './clints.component.html',
	styleUrls: ['./clints.component.css']
})
export class ClintsComponent implements OnInit {
	mouseOver;

	loading;

	constructor(private router: Router, private userservice: CommonUserService) {}

	ngOnInit() {}

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
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
