import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-dashbooard',
	templateUrl: './user-dashbooard.component.html',
	styleUrls: ['./user-dashbooard.component.css']
})
export class UserDashbooardComponent implements OnInit {
	panelOpenState = false;

	constructor() {}

	ngOnInit(): void {}
}
