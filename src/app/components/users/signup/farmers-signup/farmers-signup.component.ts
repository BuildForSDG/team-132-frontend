import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-farmers-signup',
	templateUrl: './farmers-signup.component.html',
	styleUrls: ['./farmers-signup.component.css']
})
export class FarmersSignupComponent implements OnInit {
	mouseOver;

	constructor(private router: Router) {}

	ngOnInit() {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	save(form: NgForm) {
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
