import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductsComponent } from './post-products.component';

describe('PostProductsComponent', () => {
	let component: PostProductsComponent;
	let fixture: ComponentFixture<PostProductsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PostProductsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PostProductsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
