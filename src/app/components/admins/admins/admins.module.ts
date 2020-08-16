import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { MaterialModule } from 'src/app/angular-material/material/material.module';
// eslint-disable-next-line import/no-unresolved
import { AuthGuard } from 'src/app/services/auth.guard';
import { InsuranceComponent } from '../insu-companies/insurance/insurance.component';
import { AgroCompaniesComponent } from '../agro-companies/agro-companies/agro-companies.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { FarmersAdminComponent } from '../farmers/farmers/farmers.component';
import { AdminLoginComponent } from '../admin-auth/admin-login/admin-login.component';
import { AdminRegisterComponent } from '../admin-auth/admin-register/admin-register.component';
import { AdminProfileComponent } from '../admin-auth/admin-profile/admin-profile.component';
import { AdminProdComponent } from '../admin-prod/admin-prod.component';
import { AdminpanelComponent } from '../adminpanel/adminpanel.component';
import { AdminConfirmedEqualValidatorDirective } from './validate.password';

// eslint-disable-next-line import/named
const AdminRoutes: Routes = [
	{
		path: 'panel',
		component: AdminHomeComponent,
		children: [
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', component: AdminLoginComponent },
			{ path: 'signup', component: AdminRegisterComponent },
			{ path: 'home', component: AdminpanelComponent, canActivate: [AuthGuard] },
			{ path: 'profile', component: AdminProfileComponent, canActivate: [AuthGuard] },
			{ path: 'farmers', component: FarmersAdminComponent, canActivate: [AuthGuard] },
			{ path: 'agrocompanies', component: AgroCompaniesComponent, canActivate: [AuthGuard] },
			{ path: 'insurance', component: InsuranceComponent, canActivate: [AuthGuard] },
			{ path: 'products', component: AdminProdComponent, canActivate: [AuthGuard] }
		]
	}
];

@NgModule({
	declarations: [
		AdminLoginComponent,
		AdminRegisterComponent,
		AdminpanelComponent,
		AgroCompaniesComponent,
		FarmersAdminComponent,
		AdminHomeComponent,
		InsuranceComponent,
		AdminProfileComponent,
		AdminProdComponent,
		AdminConfirmedEqualValidatorDirective
	],
	imports: [CommonModule, RouterModule.forChild(AdminRoutes), FormsModule, ReactiveFormsModule, MaterialModule],
	exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule]
})
export class AdminsModule {}
