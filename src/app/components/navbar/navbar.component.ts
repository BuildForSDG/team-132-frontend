import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { BuyersService } from 'src/app/services/buyers.service';
// eslint-disable-next-line import/no-unresolved
import { AgroCompaniesService } from 'src/app/services/agro-companies.service';
// eslint-disable-next-line import/no-unresolved
import { FarmersService } from 'src/app/services/farmers.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isAuthBuyer;

	isAuthFarmer;

	isAuthAgr;

	// eslint-disable-next-line @typescript-eslint/no-useless-constructor

	constructor(public buyer: BuyersService, public agro: AgroCompaniesService, public farmer: FarmersService) {}

	ngOnInit(): void {
		this.isAuthBuyer = this.buyer.isAuth();
		console.log(this.isAuthBuyer);

		this.isAuthAgr = this.agro.isAuth();

		this.isAuthFarmer = this.farmer.isAuth();
	}
}
