import { Injectable } from '@angular/core';

declare let toastr;

@Injectable({
	providedIn: 'root'
})
export class ToasterService {
	success(message: string, title?: string): void {
		toastr.success(message, title);
	}
}
