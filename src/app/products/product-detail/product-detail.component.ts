import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  @Output() addedToFavorite: EventEmitter<Product> = new EventEmitter();

  newFavorite() {
    this.addedToFavorite.emit(this.product);
  }

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;

    this
      .productService
      .getProductById(id)
      .subscribe(
        result => this.product = result
      )

  }

}
