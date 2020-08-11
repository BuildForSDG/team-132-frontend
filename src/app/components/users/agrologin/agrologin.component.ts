import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AgroCompaniesService } from 'src/app/services/agro-companies.service';

@Component({
	selector: 'app-agrologin',
	templateUrl: './agrologin.component.html',
	styleUrls: ['./agrologin.component.css']
})
export class AgrologinComponent implements OnInit {
	mouseOver;

	constructor(private router: Router, private agro: AgroCompaniesService) {}

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

		this.agro.login(obj);

		this.router.navigate(['/dashboard/agro-dashboard']);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.router.navigate(['/']);
	}
}
