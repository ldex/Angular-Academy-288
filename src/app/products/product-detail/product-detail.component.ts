import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  @Output() addedToFavorite: EventEmitter<Product> = new EventEmitter();

  newFavorite() {
    this.addedToFavorite.emit(this.product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
