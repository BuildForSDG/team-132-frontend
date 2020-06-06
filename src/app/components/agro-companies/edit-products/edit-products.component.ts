import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { restrictedWords } from '../custom-validator/post-validator';

@Component({
	selector: 'app-edit-products',
	templateUrl: './edit-products.component.html',
	styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
	post: FormGroup;

	constructor(private fb: FormBuilder) {}

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

	save() {}

	cancel() {}
}
