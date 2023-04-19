import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {ProductService} from '../../../@core/services/product.service';
import {ProductOrder} from '../../../@core/data/product-order';
import {ProductOrderService} from '../../../@core/services/product-order.service';

@Component({
  selector: 'ngx-product-selection-dialog',
  templateUrl: './product-selection-dialog.component.html',
  styleUrls: ['./product-selection-dialog.component.scss'],
})
export class ProductSelectionDialogComponent implements OnInit {
  @Input() customerOrderId: string;
  dataSource = [];
  displayedColumns = ['partNumber', 'uom', 'size', 'storedQuantity', 'select'];
  tableOptions = { edit: false, remove: false, add: true };

  constructor(
    protected ref: NbDialogRef<ProductSelectionDialogComponent>,
    private service: ProductService,
    private toastrService: NbToastrService,
    private productOrderService: ProductOrderService,
  ) { }

  ngOnInit(): void {
    this.service.getPage(0, undefined, undefined).then(res => {
      this.dataSource = res.results;
    });
  }

  onAddProduct(productOrder: ProductOrder) {
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
