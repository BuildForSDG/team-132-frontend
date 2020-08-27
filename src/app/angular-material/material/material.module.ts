import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatCardModule,
		MatExpansionModule,
		MatTableModule,
		MatDialogModule,
		MatButtonModule,
		MatButtonToggleModule
	],
	exports: [
		CommonModule,
		MatCardModule,
		MatExpansionModule,
		MatTableModule,
		MatDialogModule,
		MatButtonModule,
		MatButtonToggleModule
	]
})
export class MaterialModule {}
