/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolved, ResolvedInsu, Idelete } from '../components/admins/insu-companies/insurance';

const url = 'https://zero-hunger-organic.herokuapp.com/api/v1/admin';

@Injectable({
	providedIn: 'root'
})
export class Insurance {
	constructor(private http: HttpClient) {}

	// CREATE
	postInsurance(data) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.post(`${url}/register-insurance`, data, { headers });
	}

	// READ
	getAllInsurance(): Observable<Resolved> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.get<Resolved>(`${url}/companies`, { headers });
	}

	// READ
	getOneInsu(id: string): Observable<ResolvedInsu> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this.http.get<ResolvedInsu>(`${url}/companies/${id}`, { headers });
	}

	// DELETE
	deleteInsu(id): Observable<Idelete> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.delete<Idelete>(`${url}/companies/${id}`, { headers });
	}
}
