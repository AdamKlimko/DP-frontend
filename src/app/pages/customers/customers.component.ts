import { Component, OnInit } from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {CustomerService} from '../../@core/services/customer.service';
import {Customer} from '../../@core/data/customer';
import {CustomerDialogComponent} from './customer-dialog/customer-dialog.component';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';

@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent extends PageBaseDirective<Customer> implements OnInit {

  displayedColumns = ['id', 'name', 'description', 'country', 'action'];

  constructor(
    protected service: CustomerService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  create() {
    this.dialogService.open(CustomerDialogComponent).onClose.subscribe(() => {
      this.getFirstPage();
      },
    );
  }

  update(customer: Customer) {
    this.dialogService.open(CustomerDialogComponent, {
      context: {
        customer: customer,
      },
    })
      .onClose.subscribe(() => {
        this.getCurrentPage();
      });
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Customer Deleted', `Success`, { status: 'success' });
        this.getCurrentPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
