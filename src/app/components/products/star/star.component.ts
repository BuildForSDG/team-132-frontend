import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
	@Input() rating: number;

	starWidth: number;

	constructor() {}

	ngOnInit() {}

	ngOnChanges() {
		this.starWidth = this.rating * (75 / 5);
	}
}
