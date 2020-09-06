/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpEventType,
	HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { HttpCasheService } from './HttpCashe';
import { CommonUserService } from './services/commonuser';

@Injectable()
export class UserAuthInterceptor implements HttpInterceptor {
	constructor(private userservice: CommonUserService, private cashe: HttpCasheService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.method !== 'GET') {
			console.log(`Invalidate cashe ${req.method} ${req.url}`);
			this.cashe.invalidateCashe();
			return next.handle(req);
		}

		const cashebleResponse: HttpResponse<any> = this.cashe.get(req.url);

		if (cashebleResponse) {
			console.log(`Return cashed responce: ${cashebleResponse.url}`);
			console.log(cashebleResponse);
			return of(cashebleResponse);
		}

		const token = this.userservice.getToken();

		if (token) {
			const modifiedReq: HttpRequest<any> = req.clone({
				headers: req.headers.set('Authorization', `${token}`)
			});

			return next.handle(modifiedReq).pipe(
				tap((event) => {
					if (event instanceof HttpResponse) {
						console.log(`Adding items to cashe: ${modifiedReq.url}`);
						this.cashe.put(modifiedReq.url, event);
					}
				})
			);
		}

		return next.handle(req).pipe(
			tap((event) => {
				if (event instanceof HttpResponse) {
					console.log(`Adding items to cashe: ${req.url}`);
					this.cashe.put(req.url, event);
				}
			})
		);
	}
}
