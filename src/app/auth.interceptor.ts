/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private userservice: UserService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.userservice.getToken();

		const modifiedReq: HttpRequest<any> = req.clone({
			headers: req.headers.set('Authorization', `Bearer ${token}`)
		});

		return next.handle(modifiedReq).pipe(
			tap((event) => {
				if (event.type === HttpEventType.Response) {
					console.log(event.body);
				}
			})
		);
	}
}
