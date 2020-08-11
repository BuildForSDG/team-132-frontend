import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved
import { MaterialModule } from 'src/app/angular-material/material/material.module';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { PostProductsComponent } from './post-products/post-products.component';
import { UserDashbooardComponent } from './user-dashbooard/user-dashbooard.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
	{ path: 'products', component: PostProductsComponent },
	{ path: 'products/edit', component: EditProductsComponent },
	{ path: 'products/view', component: ViewProductsComponent },
	{ path: 'user', component: UserDashbooardComponent }
];
@NgModule({
	declarations: [EditProductsComponent, PostProductsComponent, UserDashbooardComponent, ViewProductsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, FormsModule, ReactiveFormsModule],
	exports: [RouterModule, FormsModule, MaterialModule]
})
export class AgroCompaniesModule {}
