import { Component, OnInit } from '@angular/core';
import {Product} from '../../@core/data/product';
import {NbDialogService} from '@nebular/theme';
import {ProductService} from '../../@core/services/product.service';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  // Paginator
  length = 0;
  pageIndex = 0;

  constructor(
    private service: ProductService,
    private dialogService: NbDialogService,
  ) {}

  ngOnInit(): void {
    this.getPage(0);
  }

  private getPage(page: number): void {
    this.service.getPage(page).then(res => {
      this.products = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  setPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.getPage(event.pageIndex);
  }

  create() {
    this.dialogService.open(ProductDialogComponent).onClose.subscribe(() => {
      this.getPage(0);
      },
    );
  }
}
