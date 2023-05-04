import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {SemiProduct} from '../../../../@core/data/semi-product';
import {SemiProductService} from '../../../../@core/services/semi-product.service';
import {SemiProductDialogComponent} from '../semi-product-dialog/semi-product-dialog.component';

@Component({
  selector: 'ngx-semi-products',
  templateUrl: './semi-products.component.html',
  styleUrls: ['./semi-products.component.scss'],
})
export class SemiProductsComponent extends PageBaseDirective<SemiProduct> implements OnInit {

  displayedColumns = ['id', 'partNumber', 'description', 'manufacturer', 'uom', 'storedQuantity', 'action'];
  tableOptions = { edit: true, remove:  true, add: false };

  constructor(
    protected service: SemiProductService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    this.dialogService.open(SemiProductDialogComponent).onClose.subscribe(res => {
        if (res) {
          this.getFirstPage();
        }
      },
    );
  }

  update(semiProduct: SemiProduct) {
    this.dialogService.open(SemiProductDialogComponent, {
      context: {
        semiProduct: semiProduct,
      },
    })
      .onClose.subscribe(() => {
      this.getCurrentPage();
    });
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Semi Product Deleted', `Success`, { status: 'success' });
        this.getCurrentPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
