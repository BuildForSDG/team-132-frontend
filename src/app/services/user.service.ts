/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

const url = 'https://zero-hunger-organic.herokuapp.com/api/v1/farmer/register';
@Injectable({
	providedIn: 'root'
})
export class UserService {
	currentUser: User;

	loginObj: unknown;

	constructor(private http: HttpClient) {}

	currentUserObj() {
		return this.currentUser;
	}

	loginObjF() {
		return this.loginObj;
	}

	signup(obj: User) {
		console.log(obj);
		return this.http.post(`${url}`, obj, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		});
	}

	login(obj) {
		// eslint-disable-next-line prettier/prettier
		this.loginObj = {};
	}
}
