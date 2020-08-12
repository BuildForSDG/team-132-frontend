/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, Input } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { Iproduct } from 'src/app/iproduct';

@Component({
	selector: 'app-product-thumbnail',
	templateUrl: './product-thumbnail.component.html',
	styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent {
	@Input() product: Iproduct;

	rating;

	starWidth: number;

	ngOnChanges(): void {
		if (this.product) {
			this.rating = this.product.productCode;
			this.starWidth = this.rating * (75 / 5);
		}
	}
}
