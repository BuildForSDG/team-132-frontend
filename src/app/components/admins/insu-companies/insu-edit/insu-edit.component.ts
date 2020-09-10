/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReturnedInsu } from '../insurance';

@Component({
	selector: 'app-insu-edit',
	templateUrl: './insu-edit.component.html',
	styleUrls: ['./insu-edit.component.css']
})
export class InsuEditComponent implements OnInit {
	editForm: FormGroup;

	pageTitle;

	isDirty = true;

	constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.editForm = this.fb.group({
			businessEmail: ['', [Validators.required]],
			companyName: ['', [Validators.required]],
			idNumber: ['', [Validators.required, Validators.email]],
			pocPhoneNumber: ['', Validators.required]
		});

		this.route.data.subscribe({
			next: (data) => {
				// tslint:disable-next-line: no-string-literal
				const info = data['singleInsu'];

				const { company } = info;

				console.log(company);
				this.setEditData(company);
			}
		});
	}

	setEditData(value: ReturnedInsu) {
		if (value) {
			this.pageTitle = `Edit: ${value.companyName}`;
			this.editForm.setValue({
				businessEmail: value.businessEmail,
				companyName: value.companyName,
				idNumber: value.idNumber,
				pocPhoneNumber: value.pocPhoneNumber
			});
		}
	}

	get businessEmail() {
		return this.editForm.get('businessEmail');
	}

	get companyName() {
		return this.editForm.get('companyName');
	}

	get idNumber() {
		return this.editForm.get('idNumber');
	}

	get pocPhoneNumber() {
		return this.editForm.get('pocPhoneNumber');
	}

	save(value) {
		this.isDirty = false;
		console.log(value);
	}

	cancel(): void {
		this.router.navigate(['/admin/panel/insurance']);
	}
}
