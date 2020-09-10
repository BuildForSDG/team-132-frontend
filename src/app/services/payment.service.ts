/* eslint-disable no-var */
import { Injectable } from '@angular/core';

declare var Stripe;

@Injectable({
	providedIn: 'root'
})
export class PaymentService {
	stripe = Stripe('pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF');
}
