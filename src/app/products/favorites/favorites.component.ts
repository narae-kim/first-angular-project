import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from '../favorites.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    { provide: ProductsService, useClass: FavoritesService}
  ]
})
export class FavoritesComponent implements OnInit {

  products$: Observable<Product[]> | undefined; // subscribe/unsubscribe automatically by 'async'

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    // this.productService.getProducts().subscribe(products => {
    //   this.products$ = products;
    // })
    this.products$ = this.productService.getProducts();
  }

}
