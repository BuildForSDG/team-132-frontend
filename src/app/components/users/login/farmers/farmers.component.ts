import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FarmersService } from 'src/app/services/farmers.service';

@Component({
	selector: 'app-farmers',
	templateUrl: './farmers.component.html',
	styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {
	mouseOver;

	constructor(private router: Router, private farmer: FarmersService) {}

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

		this.farmer.login(obj);

		this.router.navigate(['/dashboard/farmer-dashboard']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
