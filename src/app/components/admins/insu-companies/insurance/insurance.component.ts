import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../insurance';

@Component({
	selector: 'app-insurance',
	templateUrl: './insurance.component.html',
	styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
	companies: Insurance[];

	constructor(private router: Router) {}

	ngOnInit(): void {
		const comp = [
			{ id: 1, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 },
			{ id: 2, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 },
			{ id: 3, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 },
			{ id: 4, name: 'Jubilee', location: 'Kitale', yrOfOperation: 10 }
		];

		this.companies = comp;
	}
}
