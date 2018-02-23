import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductInfoCardComponent } from '../src/app/product-info-card.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ProductInfoCardComponent],
  entryComponents: [ProductInfoCardComponent]
})
export class ElementsModule {
  ngDoBootstrap() {
  }
}
