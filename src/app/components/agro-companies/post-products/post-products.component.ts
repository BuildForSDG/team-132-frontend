import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { restrictedWords } from '../custom-validator/post-validator';
import { PostService } from '../agro-services/post.service';

@Component({
	selector: 'app-post-products',
	templateUrl: './post-products.component.html',
	styleUrls: ['./post-products.component.css']
})
export class PostProductsComponent implements OnInit {
	post: FormGroup;

	constructor(private fb: FormBuilder, private postproduct: PostService, private router: Router) {}

	ngOnInit(): void {
		this.post = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(2)]],
			description: [
				'',
				[Validators.required, Validators.maxLength(300), restrictedWords(['foo', 'bar', 'sex', 'fuck'])]
			],
			quatity: ['', [Validators.required]],
			amount: [null, [Validators.required]],
			rating: [null, [Validators.required]],
			details: [
				'',
				[Validators.required, Validators.maxLength(10), restrictedWords(['foo', 'bar', 'sex', 'fuck'])]
			]
		});
	}

	get name() {
		return this.post.get('name');
	}

	get details() {
		return this.post.get('details');
	}

	get description() {
		return this.post.get('description');
	}

	get quatity() {
		return this.post.get('quatity');
	}

	get amount() {
		return this.post.get('amount');
	}

	get rating() {
		return this.post.get('rating');
	}

	save(form) {
		if (form.valid) {
			const product = {
				productName: form.value.name,
				amount: +form.value.amount,
				quatity: form.value.quatity,
				rating: form.value.rating,
				detail: form.value.details,
				description: form.value.description
			};
			console.log(form.value);
			this.postproduct.addProducts(product);
			this.router.navigate(['/user/agro-companies']);
		}
	}

	cancel() {
		this.router.navigate(['/user/agro-companies']);
	}
}
