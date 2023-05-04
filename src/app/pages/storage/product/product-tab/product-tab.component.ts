import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {Product} from '../../../../@core/data/product';
import {ProductService} from '../../../../@core/services/product.service';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ProductDialogComponent} from '../product-dialog/product-dialog.component';

@Component({
  selector: 'ngx-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss'],
})
export class ProductTabComponent extends PageBaseDirective<Product> implements OnInit {

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
