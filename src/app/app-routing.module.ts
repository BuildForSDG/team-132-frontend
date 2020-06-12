import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserDashbooardComponent } from './components/agro-companies/user-dashbooard/user-dashbooard.component';
import { MaterialModule } from './angular-material/material/material.module';
import { PostProductsComponent } from './components/agro-companies/post-products/post-products.component';
import { EditProductsComponent } from './components/agro-companies/edit-products/edit-products.component';
import { ViewProductsComponent } from './components/agro-companies/view-products/view-products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductThumbnailComponent } from './components/products/product-thumbnail/product-thumbnail.component';
import { StarComponent } from './components/products/star/star.component';
import { CartComponent } from './components/products/cart/cart.component';
// import { ConfirmedEqualValidatorDirective } from './components/users/signup/clients-signup/confirmed.directive';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/cart', component: CartComponent },
	{ path: 'products/:id', component: ProductDetailComponent },
	{ path: 'user/agro-companies', component: UserDashbooardComponent },
	{ path: 'user/agro-companies/post', component: PostProductsComponent },
	{ path: 'user/agro-companies/view', component: ViewProductsComponent },
	{ path: 'user/agro-companies/edit', component: EditProductsComponent },
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	{ path: 'user', loadChildren: () => import('./lazyload/user/user.module').then((m) => m.UserModule) },
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	{
		path: 'admin',
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		loadChildren: () => import('./components/admins/admins/admins.module').then((m) => m.AdminsModule)
	},
	{
		path: 'home',
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		loadChildren: () => import('./components/information/info/info.module').then((m) => m.InfoModule)
	},
	{
		path: 'dashboard',
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		loadChildren: () => import('./components/dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule)
	}
];
@NgModule({
	declarations: [
		HomeComponent,
		UserDashbooardComponent,
		PostProductsComponent,
		EditProductsComponent,
		ViewProductsComponent,
		StarComponent,
		ProductListComponent,
		ProductDetailComponent,
		ProductThumbnailComponent,
		CartComponent
	],
	imports: [RouterModule.forRoot(routes), MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule],
	exports: [RouterModule, MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class AppRoutingModule {}
