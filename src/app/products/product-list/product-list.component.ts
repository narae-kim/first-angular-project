import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnDestroy, OnInit, AfterViewInit {

  selectedProduct: Product | undefined;

  products: Product[] = [];

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  private productsSub: Subscription | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productsSub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`${this.productDetail.product} from ngAfterViewInit`);
    }
  }

  ngOnDestroy(): void { // unsubscribe from an observable manually
      this.productsSub?.unsubscribe();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`)
  }

}
