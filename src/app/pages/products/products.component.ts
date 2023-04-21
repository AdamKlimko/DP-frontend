import { Component, OnInit } from '@angular/core';
import {Product} from '../../@core/data/product';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ProductService} from '../../@core/services/product.service';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends PageBaseDirective<Product> implements OnInit {

  displayedColumns = ['id', 'partNumber', 'description', 'uom', 'size', 'storedQuantity', 'action'];
  tableOptions = { detail: true, edit: true, remove:  true, add: false };

  constructor(
    protected service: ProductService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    this.dialogService.open(ProductDialogComponent).onClose.subscribe(res => {
        if (res) {
          this.getFirstPage();
        }
      },
    );
  }

  update(product: Product) {
    this.dialogService.open(ProductDialogComponent, {
      context: {
        product: product,
      },
    })
      .onClose.subscribe(() => {
        this.getCurrentPage();
      });
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Product Deleted', `Success`, { status: 'success' });
        this.getCurrentPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
