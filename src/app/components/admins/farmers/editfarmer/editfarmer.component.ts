/* eslint-disable dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-editfarmer',
	templateUrl: './editfarmer.component.html',
	styleUrls: ['./editfarmer.component.css']
})
export class EditfarmerComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		// tslint:disable-next-line: no-string-literal
		const data = this.route.snapshot.data['singleuser'];
		console.log(data);
	}
}
