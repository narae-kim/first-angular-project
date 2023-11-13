import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();

  constructor() {
    console.log(`Name is ${this.product} in the constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product} in the ngOnInit`);
  }

  buy() {
    this.bought.emit();
  }

  // get productName(): string {
  //   console.log(`Get ${this.product?.name}`);
  //   return this.product?.name;
  // }
}
