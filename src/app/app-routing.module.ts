/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './angular-material/material/material.module';
// import { StarComponent } from './components/products/star/star.component';
import { HomestarComponent } from './components/home/homestar/homestar.component';
import { ProductResolverService } from './components/products/product.resolver.service';
import { Loader } from './preload.strategy';
// import { ProductsModule } from './components/products/product.module';
// import { ConfirmedEqualValidatorDirective } from './components/users/signup/clients-signup/confirmed.directive';

const routes: Routes = [
	{ path: '', component: HomeComponent, resolve: { products: ProductResolverService } },
	{
		path: 'services',
		loadChildren: () => import('./components/products/product.module').then((m) => m.ProductsModule),
		data: { preload: false, delay: false }
	},
	{
		path: '',
		loadChildren: () => import('./components/information/info/info.module').then((m) => m.InfoModule),
		data: { preload: true, delay: true }
	},
	{
		path: 'user',
		loadChildren: () => import('./lazyload/user/user.module').then((m) => m.UserModule),
		data: { preload: true, delay: false }
	},
	{
		path: 'admin',
		loadChildren: () => import('./components/admins/admins/admins.module').then((m) => m.AdminsModule),
		data: { preload: true, delay: true }
	},
	{
		path: 'agro-companies',
		loadChildren: () => import('./components/agro-companies/agro.module').then((m) => m.AgroCompaniesModule),
		data: { preload: false, delay: true }
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./components/dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
		data: { preload: false, delay: true }
	}
];
@NgModule({
	declarations: [HomeComponent, HomestarComponent],
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: Loader }),
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule
	],
	exports: [RouterModule, MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class AppRoutingModule {}
