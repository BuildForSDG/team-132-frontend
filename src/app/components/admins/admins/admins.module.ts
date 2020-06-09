import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComponent } from '../insu-companies/insurance/insurance.component';
import { AgroCompaniesComponent } from '../agro-companies/agro-companies/agro-companies.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { FarmersAdminComponent } from '../farmers/farmers/farmers.component';
// eslint-disable-next-line import/named
const AdminRoutes: Routes = [
	{ path: 'main', component: AdminHomeComponent },
	{ path: 'farmers', component: FarmersAdminComponent },
	{ path: 'agrocompanies', component: AgroCompaniesComponent },
	{ path: 'insurance', component: InsuranceComponent }
];

@NgModule({
	declarations: [AgroCompaniesComponent, FarmersAdminComponent, AdminHomeComponent, InsuranceComponent],
	imports: [CommonModule, RouterModule.forChild(AdminRoutes)],
	exports: [CommonModule, RouterModule]
})
export class AdminsModule {}
