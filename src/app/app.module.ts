/* eslint-disable prefer-destructuring */
/* eslint-disable dot-notation */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxSpinnerModule } from 'ngx-spinner';

import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ProductsModule } from './components/products/product.module';
// import { AdminsModule } from './components/admins/admins/admins.module';
// import { UserModule } from './lazyload/user/user.module';
// import { InfoModule } from './components/information/info/info.module';
// import { DashboardModule } from './components/dashboard/dashboard/dashboard.module';
import { MaterialModule } from './angular-material/material/material.module';
// import { AgroCompaniesModule } from './components/agro-companies/agro.module';
import { AuthInterceptor } from './auth.interceptor';
import { ErrorInterCeptor } from './error.interceptor';
import { HttpErrorsComponent } from './http-errors/http-errors.component';
import { UserAuthInterceptor } from './userAuthInterceptor';

@NgModule({
	declarations: [AppComponent, NavbarComponent, DashboardComponent, FooterComponent],
	imports: [
		AppRoutingModule,
		MaterialModule,
		MatDialogModule,
		MatButtonModule,
		BrowserAnimationsModule,
		NgxSpinnerModule,
		BrowserModule,
		HttpClientModule
	],
	entryComponents: [HttpErrorsComponent],
	providers: [
		{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterCeptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: UserAuthInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
