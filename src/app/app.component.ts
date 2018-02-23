import { Component } from '@angular/core';
import { Product } from './product-info-card.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Storefront</h1>
    <product-info-card [product]="product" (buy)="buy($event)"></product-info-card>
  `,
  styles: []
})
export class AppComponent {
  product: Product = {
    name: 'Fresh Salmon',
    description: 'Caught locally and delivered fresh on ice to your front door. Best market price around!'
  };

  buy(product: Product) {
    console.log(`Purchase ${product.name}`);
  }
}
