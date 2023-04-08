import {Component, Input} from '@angular/core';
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
export class CustomerOrderDialogComponent {

  currencies = Object.values(Currency);
  priorities = Object.values(Priority);
  @Input() title: string;

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
}
