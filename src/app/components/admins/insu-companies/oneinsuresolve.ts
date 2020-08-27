/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Insurance } from 'src/app/services/insurance';
import { of } from 'rxjs';
import { ResolvedInsu } from './insurance';

@Injectable({
	providedIn: 'root'
})
export class OneInsurance implements Resolve<ResolvedInsu> {
	constructor(private insurance: Insurance) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): ResolvedInsu | import('rxjs').Observable<ResolvedInsu> | Promise<ResolvedInsu> {
		const id = route.paramMap.get('_id');
		console.log(id);
		if (!id) {
			return of(null);
		}

		return this.insurance.getOneInsu(id);
	}
}
