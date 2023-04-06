import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CustomerOrderService} from '../../../@core/services/customer-order.service';
import {MatPaginator} from '@angular/material/paginator';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {CustomerOrderDialogComponent} from '../customer-order-dialog/customer-order-dialog.component';


@Component({
  selector: 'ngx-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
})
export class CustomerOrdersComponent implements AfterViewInit {
  constructor(
    private service: CustomerOrderService,
    private dialogService: NbDialogService,
  ) {}

  displayedColumns: string[] = [
    'state', 'priority', 'price', 'currency', 'orderDate', 'productionSeq', 'orderProfit',
  ];
  dataSource = new MatTableDataSource<CustomerOrder>();

  // Paginator
  length = 0;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.getPage(0);
  }

  private getPage(page: number): void {
    this.service.getPage(page).then(res => {
      this.dataSource.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  setPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.getPage(event.pageIndex);
  }

  create() {
    this.dialogService.open(CustomerOrderDialogComponent, {
      context: {
        title: 'Create new customer order',
      },
    });
  }
}
