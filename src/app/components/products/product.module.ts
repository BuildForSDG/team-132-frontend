/* eslint-disable import/no-unresolved */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/angular-material/material/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolverService } from './product.resolver.service';
import { ProductResolver } from './product-detail/product-resolve';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

const routes: Routes = [
	{ path: 'products', component: ProductListComponent, resolve: { products: ProductResolverService } },
	{ path: 'products/cart', component: CartComponent },
	{ path: 'products/:id', component: ProductDetailComponent, resolve: { productResolve: ProductResolver } }
];
@NgModule({
	declarations: [ProductListComponent, CartComponent, ProductDetailComponent, ProductThumbnailComponent],
	imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, FormsModule],
	exports: [RouterModule, FormsModule, MaterialModule]
})
export class ProductsModule {}
