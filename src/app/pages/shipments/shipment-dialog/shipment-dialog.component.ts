import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {Shipment} from '../../../@core/data/shipment';
import {FormControl, FormGroup} from '@angular/forms';
import {ShipmentService} from '../../../@core/services/shipment.service';
import {Priority} from '../../../@core/enums/priority';
import {State} from '../../../@core/enums/state';
import {CustomerService} from '../../../@core/services/customer.service';

@Component({
  selector: 'ngx-shipment-dialog',
  templateUrl: './shipment-dialog.component.html',
  styleUrls: ['./shipment-dialog.component.scss'],
})
export class ShipmentDialogComponent implements OnInit {
  @Input() shipment: Shipment | undefined;
  customers = [];
  customersOptions = [];
  priorities = Object.values(Priority);
  states = Object.values(State);

  form = new FormGroup({
    state: new FormControl<State>(State.PLANNED),
    customer: new FormControl<string>(null),
    priority: new FormControl<Priority>(Priority.MEDIUM),
    address: new FormControl<string>(null),
  });
  constructor(
    protected ref: NbDialogRef<ShipmentDialogComponent>,
    private service: ShipmentService,
    private toastrService: NbToastrService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    if (this.shipment) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.state.patchValue(this.shipment.state);
    this.form.controls.customer.patchValue(this.shipment.customer as string);
    this.form.controls.priority.patchValue(this.shipment.priority);
    this.form.controls.address.patchValue(this.shipment.address);
  }

  create() {
    const shipment = new Shipment(
      undefined,
      this.form.controls.state.value,
      this.form.controls.customer.value,
      this.form.controls.priority.value,
      this.form.controls.address.value,
      [],
    );
    this.service.create(shipment)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Shipment Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const shipment = new Shipment(
      undefined,
      this.form.controls.state.value,
      this.form.controls.customer.value,
      this.form.controls.priority.value,
      this.form.controls.address.value,
      this.shipment.customerOrders,
    );
    this.service.updateById(this.shipment.id, shipment)
      .then(
        () => {
          this.ref.close(true);
          this.toastrService.show('Shipment Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  // Customer Autocomplete
  private getPageCustomers(query?: string) {
    this.customerService.getPage(0, query, undefined).then(r => {
      this.customers = r.results;
      this.customersOptions = this.customers.map(customer => customer.name);
    });
  }

  onCustomerSelected(customerName: string) {
    const customerObject = this.customers.find(customer => customer.name === customerName);
    this.form.controls.customer.patchValue(customerObject.id);
  }

  onCustomerFilterChanged(event: string) {
    this.getPageCustomers(event);
  }
}
