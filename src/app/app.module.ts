import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsModule } from './components/products/product.module';
import { AdminsModule } from './components/admins/admins/admins.module';
import { UserModule } from './lazyload/user/user.module';
import { InfoModule } from './components/information/info/info.module';
import { DashboardModule } from './components/dashboard/dashboard/dashboard.module';
import { MaterialModule } from './angular-material/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AgroCompaniesModule } from './components/agro-companies/agro.module';
@NgModule({
	declarations: [AppComponent, NavbarComponent, DashboardComponent, FooterComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		MaterialModule,
		InfoModule,
		AgroCompaniesModule,
		AdminsModule,
		UserModule,
		DashboardModule,
		ProductsModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
