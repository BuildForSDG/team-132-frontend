/* eslint-disable import/named */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iresponce, ReturnedUser } from '../user';

const url = 'https://zero-hunger-organic.herokuapp.com/api/v1';

@Injectable({
	providedIn: 'root'
})
export class UserDetails {
	constructor(private http: HttpClient) {}

	getAllUser(): Observable<Iresponce[]> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded'
		});

		console.log(headers);

		return this.http.get<Iresponce[]>(`${url}/farmer/all`, { headers });
	}

	getOneUser(id: string): Observable<ReturnedUser> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded'
		});

		return this.http.get<ReturnedUser>(`${url}/farmers/${id}`, { headers });
	}

	deleteOneUser(id) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		console.log(id);

		return this.http.delete(`${url}/farmers/${id}`, { headers });
	}
}
