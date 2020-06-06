import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Iproduct } from '../iproduct';

const URL = 'api/products.json';
@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	constructor(private http: HttpClient) {}

	getProducts(): Observable<Iproduct[]> {
		return this.http.get<Iproduct[]>(URL).pipe(
			map((x) => x),
			catchError(this.handleError)
		);
	}

	getProduct(id: number): Observable<Iproduct | undefined> {
		return this.getProducts().pipe(
			map((products: Iproduct[]) => {
				return products.find((x) => x.productId === id);
			})
		);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	private handleError(err: HttpErrorResponse) {
		// in a real world app, we may send the server to some remote logging infrastructure
		// instead of just logging it to the console
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			errorMessage = `An error occurred: ${err.error.message}`;
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
		}
		// eslint-disable-next-line no-console
		console.error(errorMessage);
		return throwError(errorMessage);
	}
}
