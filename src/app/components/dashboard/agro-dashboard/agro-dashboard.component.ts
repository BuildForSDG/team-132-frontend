import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-agro-dashboard',
	templateUrl: './agro-dashboard.component.html',
	styleUrls: ['./agro-dashboard.component.css']
})
export class AgroDashboardComponent implements OnInit {
	panelOpenState = false;

	constructor() {}

	ngOnInit(): void {}
}
