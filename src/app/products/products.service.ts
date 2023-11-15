import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: 'Webcam',
        price: 100
      },
      {
        name: 'Microphone',
        price: 210
      },
      {
        name: 'Wireless Keyboard',
        price: 123
      }
    ];
  }
}
