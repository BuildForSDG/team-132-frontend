import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorsComponent } from './http-errors/http-errors.component';

@Injectable({
	providedIn: 'root'
})
export class ErrorInterCeptor implements HttpInterceptor {
	constructor(private dialog: MatDialog) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((err: HttpErrorResponse) => {
				console.log(['amos', err.error.error[0].msg]);
				let errorMessage = 'An unknown error occured!';

				if (err.error.error[0].msg) {
					errorMessage = err.error.error[0].msg;
				}
				this.dialog.open(HttpErrorsComponent, { data: { message: errorMessage } });
				return throwError(err);
			})
		);
	}
}
