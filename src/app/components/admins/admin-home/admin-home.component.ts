import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-admin-home',
	templateUrl: './admin-home.component.html',
	styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
	home = false;

	profile = false;

	agroComp = false;

	insurance = false;

	farmers = false;

	constructor() {}

	ngOnInit(): void {}

	homeF() {
		this.home = true;
		return this.home;
	}

	profileF() {
		this.profile = true;
		return this.profile;
	}

	agroCompF() {
		this.agroComp = true;
		this.home = false;
		return this.agroComp;
	}

	insuranceF() {
		this.insurance = true;
		return this.insurance;
	}

	farmersF() {
		this.farmers = true;
		return this.farmers;
	}
}
