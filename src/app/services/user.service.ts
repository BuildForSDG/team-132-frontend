/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User, Itoken } from '../user';

const url = 'https://zero-hunger-organic.herokuapp.com/api/v1/farmer';
@Injectable({
	providedIn: 'root'
})
export class UserService {
	private token;

	private isAuth = false;

	private authStatusListener = new Subject<boolean>();

	private tokenTimer;

	redirectURL: string;

	loginObj: unknown;

	getToken() {
		return this.token;
	}

	// get user status
	getAuthStatusListener() {
		return this.authStatusListener.asObservable();
	}

	// check user status
	getIsAuth() {
		return this.isAuth;
	}

	constructor(private http: HttpClient, private router: Router) {}

	// register users
	signup(obj: User) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		this.http.post(`${url}/register`, obj, { headers }).subscribe({
			next: (data) => {
				console.log(data);
				this.router.navigate(['/admin/panel/login']);
			},
			error: (err) => {
				console.log(err.message);
				this.authStatusListener.next(false);
			}
		});
	}

	// validate users
	login(user) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		this.http.post(`${url}/sign-in`, user, { headers }).subscribe({
			next: (data: Itoken) => {
				console.log(data);
				if (data.token) {
					this.storeToke(data.token);
				}
			},
			error: (err) => {
				console.log(err.message);
				this.authStatusListener.next(false);
			}
		});
	}

	// store token after success login
	storeToke(token) {
		if (token) {
			this.token = token;
			this.authTimer(360000);
			this.isAuth = true;
			this.authStatusListener.next(true);
			const now = new Date();
			const expireIn = new Date(now.getTime() + 360000);
			this.setAuthData(token, expireIn);
			if (this.redirectURL) {
				this.router.navigateByUrl(this.redirectURL);
			} else {
				this.router.navigate(['/admin/panel/home']);
			}
		}
	}

	// auto autheticate user
	autoAuth() {
		const localData = this.getAuthData();

		if (!localData) {
			return;
		}
		const now = new Date();
		const expireIn = localData.expireIn.getTime() - now.getTime();
		if (expireIn > 0) {
			this.token = localData.token;
			this.authTimer(expireIn);
			this.isAuth = true;
			this.authStatusListener.next(true);
			console.log(this.router.url);
			if (this.redirectURL) {
				this.router.navigateByUrl(this.redirectURL);
			} else {
				this.router.navigateByUrl(this.router.url);
			}
		}
	}

	// logout
	logout() {
		this.token = null;
		this.isAuth = false;
		this.authStatusListener.next(false);
		clearTimeout(this.tokenTimer);
		this.clearAuthData();
		this.router.navigate(['/admin/panel/login']);
	}

	// set timer function
	private authTimer(duration: number) {
		console.log(duration);
		this.tokenTimer = setTimeout(() => {
			this.logout();
		}, duration);
	}

	// working with local storage to store user data

	// store token on localstorage
	private setAuthData(token: string, expireIn: Date) {
		localStorage.setItem('token', token);
		localStorage.setItem('expireIn', expireIn.toISOString());
	}

	// clear locastorage
	private clearAuthData() {
		localStorage.removeItem('token');
		localStorage.removeItem('expireIn');
	}

	// get store data in localstorage
	private getAuthData() {
		const localToken = localStorage.getItem('token');
		const localExpireIn = localStorage.getItem('expireIn');

		if (!localToken || !localExpireIn) {
			return;
		}

		return {
			token: localToken,
			expireIn: new Date(localExpireIn)
		};
	}
}
