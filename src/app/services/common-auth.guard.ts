/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonUserService } from './commonuser';

@Injectable({
	providedIn: 'root'
})
export class CommonAuthGuard implements CanActivate {
	constructor(private userservice: CommonUserService, private router: Router) {}

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
		this.router.navigate(['/user/login']);
		return false;
	}
}
