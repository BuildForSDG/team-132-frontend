/* eslint-disable no-var */
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { PaymentService } from 'src/app/services/payment.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {
	stripe;

	amount;

	paymentReq: any;

	elements: any;

	payBtn: any;

	@ViewChild('paymentElement') paymentElement;

	constructor(private payment: PaymentService) {}

	ngAfterViewInit(): void {
		this.paymentReq = this.payment.stripe.paymentRequest({
			country: 'Kenya',
			currency: 'KSH',
			total: {
				amount: this.amount
			}
		});
	}

	ngOnInit(): void {}
}
