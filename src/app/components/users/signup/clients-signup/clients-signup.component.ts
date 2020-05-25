import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	templateUrl: './clients-signup.component.html',
	styleUrls: ['./clients-signup.component.css']
})
export class ClientsSignupComponent implements OnInit {
	mouseOver;

	constructor(private router: Router) {}

	ngOnInit() {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form) {
		if (form.invalid) {
			return;
		}

		console.log(form.value);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
