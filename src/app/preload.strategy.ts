/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable dot-notation */
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Loader implements PreloadingStrategy {
	// tslint:disable-next-line: ban-types
	preload(route: Route, load: Function): Observable<any> {
		const loadRoute = (delay) => (delay ? timer(150).pipe(flatMap((_) => load())) : load());
		// tslint:disable-next-line: no-string-literal
		return route.data && route.data.preload ? loadRoute(route.data.delay) : of(null);
	}
}
