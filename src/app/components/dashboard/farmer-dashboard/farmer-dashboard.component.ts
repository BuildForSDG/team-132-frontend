import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-farmer-dashboard',
	templateUrl: './farmer-dashboard.component.html',
	styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent implements OnInit {
	panelOpenState = false;

	constructor() {}

	ngOnInit(): void {}
}
