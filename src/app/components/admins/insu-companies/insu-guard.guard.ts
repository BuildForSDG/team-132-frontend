/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { InsuRegisterComponent } from './insu-register/insu-register.component';

@Injectable({
	providedIn: 'root'
})
export class InsuGuardGuard implements CanDeactivate<InsuRegisterComponent> {
	canDeactivate(
		component: InsuRegisterComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if (component.isDirty) {
			return confirm(`Your data is not captured are you sure you want to navigate away`);
		}

		return true;
	}
}
