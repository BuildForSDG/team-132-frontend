import { Component, OnInit } from '@angular/core';
import { NavigationStart, Event, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { CommonUserService } from './services/commonuser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
	title = 'IamNotCrazyJustSick';

	footer = false;

	loading = true;

	amos = false;

	constructor(private router: Router, private userservice: CommonUserService) {
		this.router.events.subscribe({
			next: (data: Event) => {
				this.checkRouterEvents(data);
			}
		});
	}

	ngOnInit(): void {
		this.userservice.autoAuth();
	}

	checkRouterEvents(routerEvent: Event): void {
		if (routerEvent instanceof NavigationStart) {
			this.loading = true;
			this.footer = false;
		}

		if (
			routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationError ||
			routerEvent instanceof NavigationCancel
		) {
			this.loading = false;
			this.footer = true;
		}
	}

	hideFooter() {
		return this.footer;
	}
}
