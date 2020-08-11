/* eslint-disable no-undef */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './angular-material/material/material.module';
import { HomestarComponent } from './components/home/homestar/homestar.component';
import { ProductResolverService } from './components/products/product.resolver.service';
import { HomeComponent } from './components/home/home.component';
// import { ProductsModule } from './components/products/product.module';
// import { ConfirmedEqualValidatorDirective } from './components/users/signup/clients-signup/confirmed.directive';

const routes: Routes = [
	{ path: '', component: HomeComponent, resolve: { products: ProductResolverService } },
	{
		path: '',
		loadChildren: './components/information/info/info.module#InfoModule'
	},
	{
		path: 'agro-companies',
		loadChildren: './components/agro-companies/agro.module#AgroCompaniesModule'
	},
	{
		path: 'services',
		loadChildren: './components/products/product.module#ProductsModule'
	},
	{
		path: 'user',
		loadChildren: './lazyload/user/user.module#UserModule'
	},
	{
		path: 'admin',
		loadChildren: './components/admins/admins/admins.module#AdminsModule'
	},
	{
		path: 'dashboard',
		loadChildren: './components/dashboard/dashboard/dashboard.module#DashboardModule'
	}
];
@NgModule({
	declarations: [HomeComponent, HomestarComponent],
	imports: [RouterModule.forRoot(routes), MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule],
	exports: [RouterModule, MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class AppRoutingModule {}
