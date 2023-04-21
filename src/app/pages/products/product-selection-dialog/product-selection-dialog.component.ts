import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {ProductService} from '../../../@core/services/product.service';
import {ProductOrder} from '../../../@core/data/product-order';
import {ProductOrderService} from '../../../@core/services/product-order.service';
import {PageBaseDirective} from '../../../util-components/generalization/page-base.directive';
import {Product} from '../../../@core/data/product';

@Component({
  selector: 'ngx-product-selection-dialog',
  templateUrl: './product-selection-dialog.component.html',
  styleUrls: ['./product-selection-dialog.component.scss'],
})
export class ProductSelectionDialogComponent extends PageBaseDirective<Product> implements OnInit {
  @Input() customerOrderId: string;
  dataSource = [];
  displayedColumns = ['partNumber', 'uom', 'size', 'storedQuantity', 'select'];
  tableOptions = { detail: false, edit: false, remove: false, add: true };

  constructor(
    protected ref: NbDialogRef<ProductSelectionDialogComponent>,
    protected service: ProductService,
    private toastrService: NbToastrService,
    private productOrderService: ProductOrderService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  onAddProduct(productOrder: ProductOrder) {
    productOrder.customerOrder = this.customerOrderId;
    this.productOrderService.create(this.customerOrderId, productOrder)
      .then(
        () => {
          this.toastrService.show('Product Order Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
