/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
/* eslint-disable dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Insurance } from 'src/app/services/insurance';
import { ToasterService } from 'src/app/services/toastr.service';
import { ReturnedInsu } from '../insurance';

@Component({
	selector: 'app-insurance',
	templateUrl: './insurance.component.html',
	styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
	companies: ReturnedInsu[];

	animation = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private insurance: Insurance,
		private toastr: ToasterService
	) {}

	ngOnInit(): void {
		this.route.data.subscribe({
			next: (res) => {
				// tslint:disable-next-line: no-string-literal
				const insurance = res['allInsurance'];
				const { data } = insurance;
				this.companies = data;
			}
		});
	}

	delete(id): void {
		this.animation = true;
		const insu = this.companies.filter((x) => x._id !== id);
		const message = 'The Record was DELETED successful';

		this.insurance.deleteInsu(id).subscribe({
			next: () => {
				this.toastr.success(message);
			}
		});
		this.companies = insu;
	}
}
