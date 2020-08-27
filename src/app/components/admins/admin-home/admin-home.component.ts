/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
	NavigationStart,
	Event,
	NavigationEnd,
	NavigationCancel,
	NavigationError,
	Router,
	ActivatedRoute
} from '@angular/router';
import { slideInAnimation } from 'src/app/app.animation';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin-home',
	templateUrl: './admin-home.component.html',
	styleUrls: ['./admin-home.component.css'],
	animations: [slideInAnimation]
})
export class AdminHomeComponent implements OnInit, OnDestroy {
	authStatusListenerSub: Subscription;

	adminIsAuth;

	loading = true;

	constructor(private router: Router, private route: ActivatedRoute, private userservice: UserService) {
		this.router.events.subscribe({
			next: (data: Event) => {
				this.checkRouterEvents(data);
			}
		});
	}

	checkRouterEvents(routerEvent: Event): void {
		if (routerEvent instanceof NavigationStart) {
			this.loading = true;
		}

		if (
			routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationError ||
			routerEvent instanceof NavigationCancel
		) {
			this.loading = false;
		}
	}

	ngOnInit(): void {
		// auto autheticate user
		this.userservice.autoAuth();

		console.log(this.userservice.autoAuth());
		// auth status
		this.adminIsAuth = this.userservice.getIsAuth();
		this.authStatusListenerSub = this.userservice.getAuthStatusListener().subscribe({
			next: (data) => {
				console.log(data);
				this.adminIsAuth = data;
			}
		});
	}

	logout() {
		this.userservice.logout();
	}

	ngOnDestroy(): void {
		this.authStatusListenerSub.unsubscribe();
	}
}
