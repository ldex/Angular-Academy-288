import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { finalize, map, Observable, tap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  title = 'Products';
  products: Product[];
  products$: Observable<Product[]>;
  selectedProduct: Product;

  // For Material Table
  isLoading: boolean = false;
  displayedColumns = ['id', 'name', 'description', 'price'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  onNewFavorite(product: Product) {
    alert(product.name);
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.products$ = this.productService.products$;

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results
    //   );
  }

  ngAfterViewInit() {
      // If the user changes the sort order, reset back to the first page.
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      this.isLoading = true;
      this
        .products$
        .pipe(
          finalize(() => this.isLoading = false)
        )
        .subscribe(
          data => this.dataSource.data = data
        )

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
