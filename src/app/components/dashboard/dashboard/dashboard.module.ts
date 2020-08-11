import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { MaterialModule } from 'src/app/angular-material/material/material.module';
import { AgroDashboardComponent } from '../agro-dashboard/agro-dashboard.component';
import { FarmerDashboardComponent } from '../farmer-dashboard/farmer-dashboard.component';
import { BuyerDashboardComponent } from '../buyer-dashboard/buyer-dashboard.component';

const routes: Routes = [
	{ path: 'agro-dashboard', component: AgroDashboardComponent },
	{ path: 'farmer-dashboard', component: FarmerDashboardComponent },
	{ path: 'buyer-dashboard', component: BuyerDashboardComponent }
];

@NgModule({
	declarations: [AgroDashboardComponent, FarmerDashboardComponent, BuyerDashboardComponent],
	imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
	exports: [CommonModule, RouterModule, MaterialModule]
})
export class DashboardModule {}
