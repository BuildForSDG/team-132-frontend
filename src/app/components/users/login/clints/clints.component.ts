import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved

@Component({
	selector: 'app-clints',
	templateUrl: './clints.component.html',
	styleUrls: ['./clints.component.css']
})
export class ClintsComponent implements OnInit {
	mouseOver;

	constructor(private router: Router) {}

	ngOnInit() {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
		if (form.invalid) {
			return;
		}

		console.log(form.value);
		const obj = {
			username: form.value.username,
			password: form.value.password
		};
		this.router.navigate(['/dashboard/buyer-dashboard']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
