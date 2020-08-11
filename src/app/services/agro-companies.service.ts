import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
	providedIn: 'root'
})
export class AgroCompaniesService {
	currentUser: User;

	loginObj: unknown;

	currentUserObj() {
		return this.currentUser;
	}

	loginObjF() {
		return this.loginObj;
	}

	constructor() {}

	signup(obj: User) {
		this.currentUser = {
			username: obj.username,
			email: obj.email,
			password: obj.password,
			fname: 'Amos',
			sname: 'Moyo'
		};

		return this.currentUserObj();
	}

	login(obj) {
		this.loginObj = {
			username: obj.username,
			password: obj.password
		};
		this.loginObjF();
	}

	isAuth() {
		return !!this.loginObj;
	}

	updateUser(firstname: string, lastname: string) {
		if (this.isAuth()) {
			this.currentUser.fname = firstname;
			this.currentUser.sname = lastname;
		}
	}
}
