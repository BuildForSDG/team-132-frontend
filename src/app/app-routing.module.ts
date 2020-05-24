import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { ConfirmedEqualValidatorDirective } from './components/users/signup/clients-signup/confirmed.directive';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	{ path: 'user', loadChildren: () => import('./lazyload/user/user.module').then((m) => m.UserModule) }
];
@NgModule({
	declarations: [HomeComponent],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
