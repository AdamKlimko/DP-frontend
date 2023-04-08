import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerOrderService} from '../../../@core/services/customer-order.service';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {State} from '../../../@core/enums/state';
import {Currency} from '../../../@core/enums/currency';
import {Priority} from '../../../@core/enums/priority';

@Component({
  selector: 'ngx-customer-order-dialog',
  templateUrl: './customer-order-dialog.component.html',
  styleUrls: ['./customer-order-dialog.component.scss'],
})
export class CustomerOrderDialogComponent implements OnInit {

  currencies = Object.values(Currency);
  priorities = Object.values(Priority);
  @Input() customerOrder: CustomerOrder | undefined;

  form = new FormGroup({
    orderDate: new FormControl<Date>(new Date()),
    price: new FormControl<number>(null),
    orderProfit: new FormControl<number>(null),
    currency: new FormControl<Currency>(Currency.EUR),
    productionSeq: new FormControl<string>(null),
    priority: new FormControl<Priority>(Priority.MEDIUM),
    customer: new FormControl<string>(null),
  });

  constructor(
    protected ref: NbDialogRef<CustomerOrderDialogComponent>,
    private service: CustomerOrderService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    if (this.customerOrder) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.orderDate.patchValue(this.customerOrder.orderDate);
    this.form.controls.price.patchValue(this.customerOrder.price);
    this.form.controls.orderProfit.patchValue(this.customerOrder.orderProfit);
    this.form.controls.currency.patchValue(this.customerOrder.currency);
    this.form.controls.productionSeq.patchValue(this.customerOrder.productionSeq);
    this.form.controls.priority.patchValue(this.customerOrder.priority);
    this.form.controls.customer.patchValue(this.customerOrder.customer);
  }

  create() {
    const customerOrder = new CustomerOrder(
      State.PLANNED,
      this.form.controls.price.value,
      this.form.controls.currency.value,
      this.form.controls.orderDate.value,
      this.form.controls.productionSeq.value,
      this.form.controls.priority.value,
      this.form.controls.orderProfit.value,
      this.form.controls.customer.value,
      [],
    );
    this.service.create(customerOrder)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Customer Order Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const customerOrder = new CustomerOrder(
      this.customerOrder.state,
      this.form.controls.price.value,
      this.form.controls.currency.value,
      this.form.controls.orderDate.value,
      this.form.controls.productionSeq.value,
      this.form.controls.priority.value,
      this.form.controls.orderProfit.value,
      this.form.controls.customer.value,
      this.customerOrder.products,
    );
    this.service.updateById(this.customerOrder.id, customerOrder)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Customer Order Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
