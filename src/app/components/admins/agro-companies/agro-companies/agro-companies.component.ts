import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgroCompanies } from '../agro-companies';

@Component({
	selector: 'app-agro-companies',
	templateUrl: './agro-companies.component.html',
	styleUrls: ['./agro-companies.component.css']
})
export class AgroCompaniesComponent implements OnInit {
	companies: AgroCompanies[];

	constructor(private router: Router) {}

	ngOnInit(): void {
		const comp = [
			{ id: 1, name: 'Agrovet', location: 'Kitale', yrOfOperation: 10 },
			{ id: 2, name: 'Ukulima', location: 'Kitale', yrOfOperation: 10 },
			{ id: 3, name: 'kenya Oragic Stock', location: 'Kitale', yrOfOperation: 10 },
			{ id: 4, name: 'Umoja', location: 'Kitale', yrOfOperation: 10 }
		];

		this.companies = comp;
	}
}
