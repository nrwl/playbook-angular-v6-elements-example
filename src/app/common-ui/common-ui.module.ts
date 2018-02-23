import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoCardComponent } from './product-info-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductInfoCardComponent],
  exports: [ProductInfoCardComponent]
})
export class CommonUiModule { }
