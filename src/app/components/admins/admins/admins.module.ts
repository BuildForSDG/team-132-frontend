/* eslint-disable import/named */
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
import { UserResolver } from '../farmers/farmers/farmer.resolver';
import { EditfarmerComponent } from '../farmers/editfarmer/editfarmer.component';
import { OneFarmerResolver } from '../farmers/farmers/onefarmer.resolver';
import { InsuRegisterComponent } from '../insu-companies/insu-register/insu-register.component';
import { InsuranceAllResolver } from '../insu-companies/insurance.resolver';
import { InsuGuardGuard } from '../insu-companies/insu-guard.guard';
import { InsuEditComponent } from '../insu-companies/insu-edit/insu-edit.component';
import { OneInsurance } from '../insu-companies/oneinsuresolve';
import { InsuEditGuardGuard } from '../insu-companies/insu-edit-guard.guard';

// eslint-disable-next-line import/named
const AdminRoutes: Routes = [
	{
		path: 'panel',
		component: AdminHomeComponent,
		children: [
			{ path: 'profile', component: AdminProfileComponent, canActivate: [AuthGuard] },
			{
				path: 'farmers',
				component: FarmersAdminComponent,
				canActivate: [AuthGuard],
				resolve: { user: UserResolver }
			},
			{ path: 'farmers/:_id', component: EditfarmerComponent, resolve: { singleuser: OneFarmerResolver } },
			{ path: 'agrocompanies', component: AgroCompaniesComponent, canActivate: [AuthGuard] },
			{
				path: 'insurance',
				component: InsuranceComponent,
				resolve: { allInsurance: InsuranceAllResolver },
				canActivate: [AuthGuard]
			},
			{ path: 'insurance/register', component: InsuRegisterComponent, canDeactivate: [InsuGuardGuard] },
			{
				path: 'insurance/:_id',
				component: InsuEditComponent,
				resolve: { singleInsu: OneInsurance },
				canActivate: [AuthGuard],
				canDeactivate: [InsuEditGuardGuard]
			},
			{ path: 'products', component: AdminProdComponent, canActivate: [AuthGuard] },
			{ path: 'home', component: AdminpanelComponent, canActivate: [AuthGuard] },
			{ path: 'login', component: AdminLoginComponent },
			{ path: 'signup', component: AdminRegisterComponent },
			{ path: '', redirectTo: 'home', pathMatch: 'full' }
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
		EditfarmerComponent,
		InsuRegisterComponent,
		InsuEditComponent,
		AdminConfirmedEqualValidatorDirective
	],
	imports: [CommonModule, RouterModule.forChild(AdminRoutes), FormsModule, ReactiveFormsModule, MaterialModule],
	exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule]
})
export class AdminsModule {}
