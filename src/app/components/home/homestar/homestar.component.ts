import { Component, OnChanges, Input } from '@angular/core';

@Component({
	selector: 'app-homestar',
	templateUrl: './homestar.component.html',
	styleUrls: ['./homestar.component.css']
})
export class HomestarComponent implements OnChanges {
	@Input() rating: number;

	starWidth: number;

	ngOnChanges(): void {
		this.starWidth = this.rating * (75 / 5);
	}
}
