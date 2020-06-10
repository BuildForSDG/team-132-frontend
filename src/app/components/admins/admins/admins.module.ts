import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsuranceComponent } from '../insu-companies/insurance/insurance.component';
import { AgroCompaniesComponent } from '../agro-companies/agro-companies/agro-companies.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { FarmersAdminComponent } from '../farmers/farmers/farmers.component';
import { AdminLoginComponent } from '../admin-auth/admin-login/admin-login.component';
import { AdminRegisterComponent } from '../admin-auth/admin-register/admin-register.component';
import { AdminProfileComponent } from '../admin-auth/admin-profile/admin-profile.component';
import { AdminProdComponent } from '../admin-prod/admin-prod.component';

// eslint-disable-next-line import/named
const AdminRoutes: Routes = [
	{ path: 'main', component: AdminHomeComponent },
	{ path: 'adminlogin', component: AdminLoginComponent },
	{ path: 'adminregister', component: AdminRegisterComponent },
	{ path: 'adminprofile', component: AdminProfileComponent },
	{ path: 'farmers', component: FarmersAdminComponent },
	{ path: 'agrocompanies', component: AgroCompaniesComponent },
	{ path: 'insurance', component: InsuranceComponent },
	{ path: 'products', component: AdminProdComponent }
];

@NgModule({
	declarations: [
		AgroCompaniesComponent,
		FarmersAdminComponent,
		AdminHomeComponent,
		InsuranceComponent,
		AdminLoginComponent,
		AdminRegisterComponent,
		AdminProfileComponent,
		AdminProdComponent
	],
	imports: [CommonModule, RouterModule.forChild(AdminRoutes), FormsModule, ReactiveFormsModule],
	exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class AdminsModule {}
