/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InsuEditComponent } from './insu-edit/insu-edit.component';

export class InsuEditGuard implements CanDeactivate<InsuEditComponent> {
	canDeactivate(
		component: InsuEditComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	):
		| boolean
		| import('@angular/router').UrlTree
		| import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
		| Promise<boolean | import('@angular/router').UrlTree> {
		if (component.isDirty) {
			return confirm(
				`Its seems there are no changes or you changes are not captured. Are you sure you want to navigate`
			);
		}
		return true;
	}
}
