import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-info-card',
  templateUrl: './product-info-card.component.html',
  styleUrls: ['./product-info-card.component.css']
})
export class ProductInfoCardComponent {
  @Input() product: Product;
  @Output() buy = new EventEmitter();
}

export interface Product {
  name: string;
  description: string;
}
