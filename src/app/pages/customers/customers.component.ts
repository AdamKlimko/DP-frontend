import { Component, OnInit } from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {CustomerService} from '../../@core/services/customer.service';
import {Customer} from '../../@core/data/customer';
import {CustomerDialogComponent} from './customer-dialog/customer-dialog.component';

@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  // Paginator
  length = 0;
  pageIndex = 0;

  constructor(
    private service: CustomerService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.getPage(0);
  }

  private getPage(page: number): void {
    this.service.getPage(page).then(res => {
      this.customers = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  setPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.getPage(event.pageIndex);
  }

  create() {
    this.dialogService.open(CustomerDialogComponent).onClose.subscribe(() => {
        this.getPage(0);
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
        this.getPage(0);
      },
    );
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Customer Deleted', `Success`, { status: 'success' });
        this.getPage(0);
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
