import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpCasheService {
	private request: any = {};

	// add items to cashe
	put(url: string, res: HttpResponse<any>): void {
		this.request[url] = res;
	}

	// retriving items from cashe
	get(url: string): HttpResponse<any> | undefined {
		return this.request[url];
	}

	// remove one item from cashe: Invalidate cashe
	invalidateUrl(url: string): void {
		this.request = undefined;
	}

	// invalidate the entire cashe
	invalidateCashe(): void {
		this.request = {};
	}
}
