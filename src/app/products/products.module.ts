import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  exports: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class ProductsModule { }
