import {Component, Input, OnInit} from '@angular/core';
import {BomItem} from '../../../@core/data/bom-item';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {SemiProduct} from '../../../@core/data/semi-product';
import {FormControl, FormGroup} from '@angular/forms';
import {PurchaseRequisitionService} from '../../../@core/services/purchase-requisition.service';
import {PurchaseRequisition} from '../../../@core/data/purchase-requisition';
import {Currency} from '../../../@core/enums/currency';
import {State} from '../../../@core/enums/state';
import {SemiProductOrderService} from '../../../@core/services/semi-product-order.service';
import {SemiProductOrder} from '../../../@core/data/semi-product-order';

@Component({
  selector: 'ngx-purchase-requisition-dialog',
  templateUrl: './purchase-requisition-dialog.component.html',
  styleUrls: ['./purchase-requisition-dialog.component.scss'],
})
export class PurchaseRequisitionDialogComponent implements OnInit {
  @Input() semiProductOrder: SemiProductOrder;
  @Input() productionOrderId: string;
  semiProduct: SemiProduct;
  currencies = Object.values(Currency);
  form = new FormGroup({
    quantity: new FormControl<number>(null),
    unitPrice: new FormControl<number>(null),
    currency: new FormControl<Currency>(Currency.EUR),
  });
  constructor(
    protected ref: NbDialogRef<PurchaseRequisitionDialogComponent>,
    private service: PurchaseRequisitionService,
    private semiProductOrderService: SemiProductOrderService,
    private toastrService: NbToastrService,
    ) { }

  ngOnInit(): void {
    const bomItem = this.semiProductOrder.bomItem as BomItem;
    this.semiProduct = bomItem.semiProduct as SemiProduct;
  }

  create() {
    const purchaseRequisition = new PurchaseRequisition(
      undefined,
      this.productionOrderId,
      this.semiProductOrder.id,
      this.semiProduct.id,
      State.PLANNED,
      this.form.controls.quantity.value,
      this.form.controls.unitPrice.value,
      this.form.controls.currency.value,
    );
    this.service.create(purchaseRequisition)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Purchase Requisition Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
