/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-unresolved */
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/services/userDetails';
import { Iresponce } from 'src/app/user';
import { ToasterService } from 'src/app/services/toastr.service';

@Component({
	selector: 'app-farmers',
	templateUrl: './farmers.component.html',
	styleUrls: ['./farmers.component.css']
})
export class FarmersAdminComponent implements OnInit, OnChanges {
	farmers: Iresponce[];

	farmerList: Iresponce[] = [];

	filterBY = 'all';

	constructor(
		private router: Router,
		private userdetails: UserDetails,
		private route: ActivatedRoute,
		private toastr: ToasterService
	) {}

	getFarmerList() {
		return this.farmers;
	}

	ngOnInit(): void {
		this.route.data.subscribe({
			next: (res) => {
				const userInfo = res.user;
				const { data } = userInfo;
				this.farmers = data;
				if (this.farmers) {
					if (this.filterBY === 'all') {
						this.allData();
					}
				}
			},
			error: (err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			}
		});
		/* this.userdetails.getAllUser().subscribe({
			next: (res) => {
				// const { data } = res;
				// console.log(data);
				// this.farmers = data;
			}
		}); */
	}

	navigate(id: string): void {
		if (id) {
			this.router.navigate([`/admin/panel/farmers/${id}`]);
		}
	}

	save(value) {
		this.filterBY = value.search;
		console.log('save', this.filterBY);
		this.ngOnChanges();
		return value.search;
	}

	allData(): void {
		this.farmerList = this.farmers.slice(0);
	}

	// tslint:disable-next-line: use-lifecycle-interface
	ngOnChanges(): void {
		if (this.filterBY === 'all') {
			this.allData();
		} else {
			this.filterArr(this.filterBY);
		}
	}

	filterArr(fil): void {
		console.log(fil);
		this.farmerList = this.farmers.filter((x) => x.role === fil);
		console.log(this.farmerList);
	}

	detete(id): void {
		this.userdetails.deleteOneUser(id);
		const insu = this.farmerList.filter((x: Iresponce) => x._id !== id);
		const message = 'The Record was DELETED successful';
		this.userdetails.deleteOneUser(id).subscribe({
			next: () => {
				this.toastr.success(message);
			}
		});

		this.farmerList = insu;
	}
}
