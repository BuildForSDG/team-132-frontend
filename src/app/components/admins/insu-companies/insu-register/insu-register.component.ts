/* eslint-disable import/no-unresolved */
import { Component, OnInit } from '@angular/core';
import { Insurance } from 'src/app/services/insurance';
import { Router } from '@angular/router';

@Component({
	selector: 'app-insu-register',
	templateUrl: './insu-register.component.html',
	styleUrls: ['./insu-register.component.css']
})
export class InsuRegisterComponent implements OnInit {
	mouseOver;

	loading = false;

	isDirty = true;

	constructor(private insurance: Insurance, private router: Router) {}

	ngOnInit(): void {}

	save(form): void {
		console.log(form.value);
		this.isDirty = false;
		this.loading = true;
		this.insurance.postInsurance(form.value).subscribe({
			next: (data) => {
				console.log(data);
				this.loading = false;
				this.router.navigate(['/admin/panel/insurance']);
			},
			error: (err) => {
				console.log(err.message);
				this.loading = false;
			}
		});
	}

	cancel(): void {
		this.router.navigate(['/admin/panel/insurance']);
	}
}
