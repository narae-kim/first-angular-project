import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
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

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  
}
