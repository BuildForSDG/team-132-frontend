import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
	animations: [
		trigger('fade', [
			transition('void => *', [
				style({ color: 'eee', opacity: 0 }),
				animate(5000, style({ color: '#111', opacity: 1 }))
			])
		])
	]
})
export class FooterComponent {}
