/* eslint-disable import/no-unresolved */
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReturnedUser } from 'src/app/user';
import { Injectable } from '@angular/core';
import { UserDetails } from 'src/app/services/userDetails';

@Injectable({
	providedIn: 'root'
})
export class OneFarmerResolver implements Resolve<ReturnedUser> {
	constructor(private userDetails: UserDetails) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): ReturnedUser | import('rxjs').Observable<ReturnedUser> | Promise<ReturnedUser> {
		return this.userDetails.getOneUser(route.paramMap.get('_id'));
	}
}
