/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonUserService } from 'src/app/services/commonuser';
import { ProductsCartService } from 'src/app/services/products-cart.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy, OnChanges {
	authStatusListenerSub: Subscription;

	isAuth;

	cartItems;

	constructor(private userservice: CommonUserService, public cart: ProductsCartService) {}

	ngOnInit(): void {
		this.isAuth = this.userservice.getIsAuth();
		this.authStatusListenerSub = this.userservice.getAuthStatusListener().subscribe({
			next: (data) => {
				this.isAuth = data;
			}
		});
		this.cartItems = 0;
	}

	// logout
	logout(): void {
		this.userservice.logout();
	}

	ngOnChanges(): void {
		this.cartItems = this.cart.getItems();
	}

	ngOnDestroy(): void {
		this.authStatusListenerSub.unsubscribe();
	}
}
