import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerOrderService} from '../../../@core/services/customer-order.service';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {State} from '../../../@core/enums/state';
import {Currency} from '../../../@core/enums/currency';
import {Priority} from '../../../@core/enums/priority';
import {CustomerService} from '../../../@core/services/customer.service';
import {Customer} from '../../../@core/data/customer';

@Component({
  selector: 'ngx-customer-order-dialog',
  templateUrl: './customer-order-dialog.component.html',
  styleUrls: ['./customer-order-dialog.component.scss'],
})
export class CustomerOrderDialogComponent implements OnInit {

  currencies = Object.values(Currency);
  priorities = Object.values(Priority);
  states = Object.values(State);
  @Input() customerOrder: CustomerOrder | undefined;
  customers = [];
  customersOptions = [];
  customerName: string;
  // length = 0;
  // pageIndex = 0;

  form = new FormGroup({
    orderDate: new FormControl<Date>(new Date()),
    price: new FormControl<number>(null),
    orderProfit: new FormControl<number>(null),
    currency: new FormControl<Currency>(Currency.EUR),
    productionSeq: new FormControl<string>(null),
    priority: new FormControl<Priority>(Priority.MEDIUM),
    state: new FormControl<State>(State.PLANNED),
    customer: new FormControl<string>(null),
    productOrders: new FormControl<string>(null),
  });

  constructor(
    protected ref: NbDialogRef<CustomerOrderDialogComponent>,
    private service: CustomerOrderService,
    private toastrService: NbToastrService,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    if (this.customerOrder) {
      this.fillForm();
      const customer = (this.customerOrder.customer as Customer);
      this.customerName = customer.name;
      this.form.controls.customer.patchValue(customer.id);
    }
    this.getPageCustomers();
  }

  private getPageCustomers(query?: string) {
    this.customerService.getPage(0, query, undefined).then(r => {
      this.customers = r.results;
      this.customersOptions = this.customers.map(customer => customer.name);
    });
  }

  private fillForm(): void {
    this.form.controls.orderDate.patchValue(this.customerOrder.orderDate);
    this.form.controls.currency.patchValue(this.customerOrder.currency);
    this.form.controls.priority.patchValue(this.customerOrder.priority);
    this.form.controls.state.patchValue(this.customerOrder.state);
  }

  create() {
    const customerOrder = new CustomerOrder(
      State.PLANNED,
      undefined,
      this.form.controls.currency.value,
      this.form.controls.orderDate.value,
      this.form.controls.priority.value,
      undefined,
      this.form.controls.customer.value,
    );
    this.service.create(customerOrder)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Customer Order Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const customerOrder = new CustomerOrder(
      this.form.controls.state.value,
      undefined,
      this.form.controls.currency.value,
      this.form.controls.orderDate.value,
      this.form.controls.priority.value,
      undefined,
      this.form.controls.customer.value,
    );
    this.service.updateById(this.customerOrder.id, customerOrder)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Customer Order Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  onCustomerSelected(customerName: string) {
    if (this.customerName !== customerName && customerName !== '') {
      const customerObject = this.customers.find(customer => customer.name === customerName);
      this.form.controls.customer.patchValue(customerObject.id);
    }
  }

  onCustomerFilterChanged(event: string) {
    this.getPageCustomers(event);
  }
}
