import {Component, Input} from '@angular/core';
import {PurchaseOrder} from '../../../../@core/data/purchase-order';
import {FormControl, FormGroup} from '@angular/forms';

import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {PurchaseOrderService} from '../../../../@core/services/purchase-order.service';

@Component({
  selector: 'ngx-purchase-order-process-dialog',
  templateUrl: './purchase-order-process-dialog.component.html',
  styleUrls: ['./purchase-order-process-dialog.component.scss'],
})
export class PurchaseOrderProcessDialogComponent  {
  @Input() purchaseOrder: PurchaseOrder | undefined;
  form = new FormGroup({
    location: new FormControl<string>(null),
  });

  constructor(
    protected ref: NbDialogRef<PurchaseOrderProcessDialogComponent>,
    private service: PurchaseOrderService,
    private toastrService: NbToastrService,
  ) {}

  process() {
    this.service.process(this.purchaseOrder.id, { location: this.form.controls.location.value })
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Purchase Order Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
