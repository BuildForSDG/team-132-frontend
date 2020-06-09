import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	declarations: [],
	imports: [CommonModule, MatCardModule, MatExpansionModule],
	exports: [CommonModule, MatCardModule, MatExpansionModule]
})
export class MaterialModule {}
