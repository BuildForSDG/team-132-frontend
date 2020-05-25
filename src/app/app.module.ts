import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserModule } from './lazyload/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ConfirmedEqualValidator } from './components/users/signup/clients-signup/confirmed.directive';

@NgModule({
	declarations: [AppComponent, NavbarComponent, DashboardComponent, FooterComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, UserModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
