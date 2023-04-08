import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerOrderService} from '../../../@core/services/customer-order.service';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CustomerOrderDialogComponent} from '../customer-order-dialog/customer-order-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.scss'],
})
export class CustomerOrderDetailComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [
    'partNumber', 'description', 'uom', 'size',
  ];
  customerOrder: CustomerOrder;
  sub: Subscription;
  constructor(
    private dialogService: NbDialogService,
    private service: CustomerOrderService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private init(): void {
    this.sub = this.route.params.subscribe(params => {
      this.service.getById(params.id)
        .then(res => {
          this.customerOrder = res;
        });
    });
  }

  edit(): void {
    this.dialogService.open(CustomerOrderDialogComponent, {
      context: {
        customerOrder: this.customerOrder,
      },
    })
      .onClose.subscribe(() => {
        this.init();
    });
  }
}
