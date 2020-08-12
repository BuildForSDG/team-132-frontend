import { Component } from '@angular/core';
import {
	NavigationStart,
	Event,
	NavigationEnd,
	NavigationCancel,
	NavigationError,
	Router,
	ActivatedRoute
} from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { slideInAnimation } from 'src/app/app.animation';

@Component({
	selector: 'app-admin-home',
	templateUrl: './admin-home.component.html',
	styleUrls: ['./admin-home.component.css'],
	animations: [slideInAnimation]
})
export class AdminHomeComponent {
	loading = true;

	constructor(private router: Router, private route: ActivatedRoute) {
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
}
