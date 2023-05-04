import {Component, Input, OnInit} from '@angular/core';
import {Currency} from '../../../../@core/enums/currency';
import {Priority} from '../../../../@core/enums/priority';
import {State} from '../../../../@core/enums/state';
import {PurchaseOrder} from '../../../../@core/data/purchase-order';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {PurchaseOrderService} from '../../../../@core/services/purchase-order.service';

@Component({
  selector: 'ngx-purchase-order-dialog',
  templateUrl: './purchase-order-dialog.component.html',
  styleUrls: ['./purchase-order-dialog.component.scss'],
})
export class PurchaseOrderDialogComponent implements OnInit {
  currencies = Object.values(Currency);
  priorities = Object.values(Priority);
  states = Object.values(State);
  @Input() purchaseOrder: PurchaseOrder | undefined;
  form = new FormGroup({
    supplier: new FormControl<string>(null),
    currency: new FormControl<Currency>(Currency.EUR),
    priority: new FormControl<Priority>(Priority.MEDIUM),
    state: new FormControl<State>(State.PLANNED),
    wantedDeliveryDate: new FormControl<Date>(new Date()),
  });

  constructor(
    protected ref: NbDialogRef<PurchaseOrderDialogComponent>,
    private service: PurchaseOrderService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    if (this.purchaseOrder) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.supplier.patchValue(this.purchaseOrder.supplier);
    this.form.controls.currency.patchValue(this.purchaseOrder.currency);
    this.form.controls.priority.patchValue(this.purchaseOrder.priority);
    this.form.controls.state.patchValue(this.purchaseOrder.state);
    this.form.controls.wantedDeliveryDate.patchValue(this.purchaseOrder.wantedDeliveryDate);
  }

  create() {
    const purchaseOrder = new PurchaseOrder(
      this.form.controls.supplier.value,
      this.form.controls.state.value,
      this.form.controls.currency.value,
      this.form.controls.priority.value,
      this.form.controls.wantedDeliveryDate.value,
    );
    this.service.create(purchaseOrder)
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

  update() {
    const purchaseOrder = new PurchaseOrder(
      this.form.controls.supplier.value,
      this.form.controls.state.value,
      this.form.controls.currency.value,
      this.form.controls.priority.value,
      this.form.controls.wantedDeliveryDate.value,
    );
    this.service.updateById(this.purchaseOrder.id, purchaseOrder)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Purchase Order Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
