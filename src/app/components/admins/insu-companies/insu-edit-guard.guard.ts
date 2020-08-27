/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { InsuEditComponent } from './insu-edit/insu-edit.component';

@Injectable({
	providedIn: 'root'
})
export class InsuEditGuardGuard implements CanDeactivate<InsuEditComponent> {
	canDeactivate(
		component: InsuEditComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if (component.isDirty) {
			return confirm(
				`Its seems there are NO CHANGES or YOUR CHANGES are not captured. Are you sure you want to NAVIGATE AWAY?`
			);
		}
		return true;
	}
}
