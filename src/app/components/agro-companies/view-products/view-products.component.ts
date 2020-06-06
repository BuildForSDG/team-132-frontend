import { Component, OnInit } from '@angular/core';
import { PostService } from '../agro-services/post.service';

@Component({
	selector: 'app-view-products',
	templateUrl: './view-products.component.html',
	styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
	posts = [];

	constructor(private viewProduct: PostService) {}

	ngOnInit(): void {
		this.posts = this.viewProduct.getProducts();
	}
}
