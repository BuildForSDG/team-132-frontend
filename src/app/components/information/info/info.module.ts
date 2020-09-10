import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';

const router: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'services', component: ServicesComponent }
];

@NgModule({
	declarations: [AboutComponent, ServicesComponent],
	imports: [CommonModule, RouterModule.forChild(router)],
	exports: [CommonModule, RouterModule]
})
export class InfoModule {}
