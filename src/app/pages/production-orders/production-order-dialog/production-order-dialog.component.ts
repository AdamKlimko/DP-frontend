import {Component, Input, OnInit} from '@angular/core';
import {Priority} from '../../../@core/enums/priority';
import {State} from '../../../@core/enums/state';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {ProductionOrder} from '../../../@core/data/production-order';
import {ProductionOrderService} from '../../../@core/services/production-order.service';
import {ProductOrder} from '../../../@core/data/product-order';
import {Currency} from '../../../@core/enums/currency';

@Component({
  selector: 'ngx-production-order-dialog',
  templateUrl: './production-order-dialog.component.html',
  styleUrls: ['./production-order-dialog.component.scss'],
})
export class ProductionOrderDialogComponent implements OnInit {
  @Input() productionOrder: ProductionOrder | undefined;
  @Input() productOrder: ProductOrder;
  priorities = Object.values(Priority);
  states = Object.values(State);

  form = new FormGroup({
    state: new FormControl<State>(State.PLANNED),
    wantedDeliveryDate: new FormControl<Date>(null),
    startDateTime: new FormControl<Date>(null),
    endDateTime: new FormControl<Date>(null),
    priority: new FormControl<Priority>(Priority.MEDIUM),
  });
  constructor(
    protected ref: NbDialogRef<ProductionOrderDialogComponent>,
    private service: ProductionOrderService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    if (this.productionOrder) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.state.patchValue(this.productionOrder.state);
    this.form.controls.wantedDeliveryDate.patchValue(this.productionOrder.wantedDeliveryDate);
    this.form.controls.startDateTime.patchValue(this.productionOrder.startDateTime);
    this.form.controls.endDateTime.patchValue(this.productionOrder.endDateTime);
    this.form.controls.priority.patchValue(this.productionOrder.priority);
  }

  create() {
    const productionOrder = new ProductionOrder(
      this.productOrder.id,
      this.productOrder.productionSeq,
      this.form.controls.state.value,
      this.form.controls.wantedDeliveryDate.value,
      this.form.controls.startDateTime.value,
      this.form.controls.endDateTime.value,
      this.form.controls.priority.value,
      Currency.EUR,
    );
    this.service.create(productionOrder)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Production Order Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const productionOrder = new ProductionOrder(
      this.productOrder.id,
      this.productOrder.productionSeq,
      this.form.controls.state.value,
      this.form.controls.wantedDeliveryDate.value,
      this.form.controls.startDateTime.value,
      this.form.controls.endDateTime.value,
      this.form.controls.priority.value,
      Currency.EUR,
    );
    this.service.updateById(this.productionOrder.id, productionOrder)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Production Order Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
