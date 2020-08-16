/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private userservice: UserService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkIfAuth(state.url);
	}

	private checkIfAuth(url: string) {
		const auth = this.userservice.getIsAuth();

		if (auth) {
			return auth;
		}

		this.userservice.redirectURL = url;
		this.router.navigate(['/admin/panel/login']);
		return false;
	}
}
