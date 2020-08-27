/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonUserService } from 'src/app/services/commonuser';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
	authStatusListenerSub: Subscription;

	isAuth;

	constructor(private userservice: CommonUserService) {}

	ngOnInit(): void {
		this.isAuth = this.userservice.getIsAuth();
		this.authStatusListenerSub = this.userservice.getAuthStatusListener().subscribe({
			next: (data) => {
				this.isAuth = data;
			}
		});
	}

	// logout
	logout(): void {
		this.userservice.logout();
	}

	ngOnDestroy(): void {
		this.authStatusListenerSub.unsubscribe();
	}
}
