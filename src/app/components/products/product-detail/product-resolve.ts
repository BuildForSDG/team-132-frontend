import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Iproduct, IproductResolved } from 'src/app/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductResolver implements Resolve<IproductResolved> {
	constructor(private productservice: ProductsService) {}
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<IproductResolved> | Promise<IproductResolved> {
		const id = +route.paramMap.get('id');

		if (isNaN(id)) {
			const message = `Wrong router ${id}`;
			console.error(message);
			return of({ product: null, error: message });
		}

		return this.productservice.getProduct(id).pipe(
			map(product => ({product})),
			catchError((err) => {
				const message = `There occured an error: ${err}`;
				console.error(message);
				return of({product: null, error: message});
			})
		);
	}
}
