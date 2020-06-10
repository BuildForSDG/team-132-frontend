import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, DashboardComponent, FooterComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
