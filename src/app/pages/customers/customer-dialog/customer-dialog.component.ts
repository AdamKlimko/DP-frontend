import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {Customer} from '../../../@core/data/customer';
import {CustomerService} from '../../../@core/services/customer.service';

@Component({
  selector: 'ngx-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss'],
})
export class CustomerDialogComponent implements OnInit {

  @Input() customer: Customer | undefined;

  form = new FormGroup({
    name: new FormControl<string>(null),
    description: new FormControl<string>(null),
    country: new FormControl<string>(null),
  });
  constructor(
    protected ref: NbDialogRef<CustomerDialogComponent>,
    private service: CustomerService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    if (this.customer) {
      this.fillForm();
    }
  }

  private fillForm(): void {
    this.form.controls.name.patchValue(this.customer.name);
    this.form.controls.description.patchValue(this.customer.description);
    this.form.controls.country.patchValue(this.customer.country);
  }

  create() {
    const customer = new Customer(
      undefined,
      this.form.controls.name.value,
      this.form.controls.description.value,
      this.form.controls.country.value,
    );
    this.service.create(customer)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Customer Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }

  update() {
    const customer = new Customer(
      undefined,
      this.form.controls.name.value,
      this.form.controls.description.value,
      this.form.controls.country.value,
    );
    this.service.updateById(this.customer.id, customer)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Customer Updated', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
