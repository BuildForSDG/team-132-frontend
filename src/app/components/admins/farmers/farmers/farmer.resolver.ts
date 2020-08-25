/* eslint-disable import/no-unresolved */
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserDetails } from 'src/app/services/userDetails';
import { Iresponce } from 'src/app/user';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserResolver implements Resolve<Iresponce[]> {
	constructor(private users: UserDetails) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iresponce[]> {
		return this.users.getAllUser();
	}
}
