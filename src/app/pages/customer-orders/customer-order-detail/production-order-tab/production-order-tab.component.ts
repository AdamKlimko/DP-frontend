import {Component, Input, OnInit} from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {ProductionOrder} from '../../../../@core/data/production-order';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ProductionOrderService} from '../../../../@core/services/production-order.service';
import {CustomerOrder} from '../../../../@core/data/customer-order';
import {
  ProductionOrderTableOptions,
} from '../../../production-orders/production-order-table/production-order-table.component';
import {CustomerOrderDetailComponent} from '../customer-order-detail.component';

@Component({
  selector: 'ngx-production-order-tab',
  templateUrl: './production-order-tab.component.html',
  styleUrls: ['./production-order-tab.component.scss'],
})
export class ProductionOrderTabComponent extends PageBaseDirective<ProductionOrder> implements OnInit {
  @Input() customerOrder: CustomerOrder;
  tableOptions: ProductionOrderTableOptions = { detail: true, edit: true, remove: true };
  displayedColumns = [
    'id', 'productOrder', 'state', 'priority', 'wantedDeliveryDate', 'startDateTime', 'endDateTime', 'action',
  ];
  constructor(
    protected service: ProductionOrderService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private parent: CustomerOrderDetailComponent,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.query = this.customerOrder.productionSeq;
    this.getFirstPage();
    this.parent.dataUpdated.subscribe(() => {
      this.getFirstPage();
    });
  }

  deleteProductOrder(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Product Order Deleted', `Success`, { status: 'success' });
        this.getFirstPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
