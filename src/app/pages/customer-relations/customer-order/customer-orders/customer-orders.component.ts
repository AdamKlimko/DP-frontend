import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {CustomerOrder} from '../../../../@core/data/customer-order';
import {CustomerOrderService} from '../../../../@core/services/customer-order.service';
import {CustomerOrderDialogComponent} from '../customer-order-dialog/customer-order-dialog.component';
import {NbDialogService} from '@nebular/theme';
import {Currency} from '../../../../@core/enums/currency';
import {Priority} from '../../../../@core/enums/priority';
import {State} from '../../../../@core/enums/state';

const sortByOptions = [
  {title: 'Order Date', value: 'orderDate'},
  {title: 'Price', value: 'price'},
  {title: 'Cost', value: 'orderCost'},
  {title: 'Profit', value: 'orderProfit'},
];

@Component({
  selector: 'ngx-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
})
export class CustomerOrdersComponent extends PageBaseDirective<CustomerOrder> implements OnInit {
  displayedColumns: string[] = [
    'state', 'priority', 'productionSeq', 'customer', 'price', 'orderCost', 'orderProfit', 'orderDate', 'action',
  ];
  sortByOptions: { title: string, value: string }[] = sortByOptions;
  currencies = Object.values(Currency);
  priorities = Object.values(Priority);
  states = Object.values(State);
  state = undefined;
  currency = undefined;
  priority = undefined;
  sortAsc = true;

  constructor (
    protected service: CustomerOrderService,
    private dialogService: NbDialogService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  protected getPage(page: number) {
    const sortBy = this.sortAsc ? this.sortBy : '-' + this.sortBy;
    this.service.getPage(page, this.query, sortBy, this.state, this.currency, this.priority).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  create() {
    this.dialogService.open(CustomerOrderDialogComponent).onClose.subscribe(res => {
        if (res) {
          this.getFirstPage();
        }
      },
    );
  }
}
