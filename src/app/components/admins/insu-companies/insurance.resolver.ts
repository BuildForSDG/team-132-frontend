/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Insurance } from 'src/app/services/insurance';
import { Iinsurance, Resolved } from './insurance';

@Injectable({
	providedIn: 'root'
})
export class InsuranceAllResolver implements Resolve<Resolved> {
	constructor(private insurance: Insurance) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Resolved | import('rxjs').Observable<Resolved> | Promise<Resolved> {
		return this.insurance.getAllInsurance();
	}
}
