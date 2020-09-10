/* eslint-disable import/no-unresolved */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Iproduct } from 'src/app/iproduct';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductResolverService implements Resolve<Iproduct[]> {
	constructor(private productservice: ProductsService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct[]> {
		// tslint:disable-next-line: indent
		return this.productservice.getProducts();
	}
}
