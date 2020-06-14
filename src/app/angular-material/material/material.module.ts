import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	declarations: [],
	imports: [CommonModule, MatCardModule, MatExpansionModule, MatTableModule],
	exports: [CommonModule, MatCardModule, MatExpansionModule, MatTableModule]
})
export class MaterialModule {}
