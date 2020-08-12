import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-profile',
	templateUrl: './admin-profile.component.html',
	styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
	constructor(private router: Router) {}
}
