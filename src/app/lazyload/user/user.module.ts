import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { ClientsFormComponent } from 'src/app/components/users/common/clients-form/clients-form.component';
// eslint-disable-next-line import/no-unresolved
import { FarmersFormComponent } from 'src/app/components/users/common/farmers-form/farmers-form.component';
// eslint-disable-next-line import/no-unresolved
import { ClintsComponent } from 'src/app/components/users/login/clints/clints.component';
// eslint-disable-next-line import/no-unresolved
import { FarmersComponent } from 'src/app/components/users/login/farmers/farmers.component';
// eslint-disable-next-line import/no-unresolved
import { ClientsSignupComponent } from 'src/app/components/users/signup/clients-signup/clients-signup.component';
// eslint-disable-next-line import/no-unresolved
import { FarmersSignupComponent } from 'src/app/components/users/signup/farmers-signup/farmers-signup.component';
// eslint-disable-next-line import/no-unresolved
import { ConfirmedEqualValidatorDirective } from 'src/app/components/users/signup/confirmed.directive';

/*
 All user components are lazily loaded into the site.
*/
const routes: Routes = [
	{ path: 'signin-form', component: ClientsFormComponent },
	{ path: 'signup-form', component: FarmersFormComponent },
	{ path: 'client-signin', component: ClintsComponent },
	{ path: 'farmer-signin', component: FarmersComponent },
	{ path: 'client-signup', component: ClientsSignupComponent },
	{ path: 'farmer-signup', component: FarmersSignupComponent }
];

@NgModule({
	declarations: [
		ClientsFormComponent,
		FarmersFormComponent,
		ClintsComponent,
		FarmersComponent,
		ClientsSignupComponent,
		FarmersSignupComponent,
		ConfirmedEqualValidatorDirective
	],
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
	exports: [RouterModule]
})
export class UserModule {}
