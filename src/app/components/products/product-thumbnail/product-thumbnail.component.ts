import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-product-thumbnail',
	templateUrl: './product-thumbnail.component.html',
	styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
	@Input() products: Iproduct[];

	// tslint:disable-next-line: no-output-on-prefix
	@Output() onRoute = new EventEmitter();

	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor() {}

	ngOnInit() {}

	route(id) {
		this.onRoute.emit(id);
	}
}
