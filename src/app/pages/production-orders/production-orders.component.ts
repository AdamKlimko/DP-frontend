import { Component, OnInit } from '@angular/core';
import {PageBaseDirective} from '../../util-components/generalization/page-base.directive';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ProductionOrder} from '../../@core/data/production-order';
import {ProductionOrderService} from '../../@core/services/production-order.service';
import {ProductionOrderDialogComponent} from './production-order-dialog/production-order-dialog.component';
import {Priority} from '../../@core/enums/priority';
import {State} from '../../@core/enums/state';

@Component({
  selector: 'ngx-production-orders',
  templateUrl: './production-orders.component.html',
  styleUrls: ['./production-orders.component.scss'],
})
export class ProductionOrdersComponent extends PageBaseDirective<ProductionOrder> implements OnInit {

  displayedColumns = [
    'id', 'productOrder', 'state', 'priority', 'wantedDeliveryDate', 'startDateTime', 'endDateTime', 'action',
  ];
  tableOptions = { detail: true, edit: true, remove:  true };
  priorities = Object.values(Priority);
  states = Object.values(State);
  state = undefined;
  priority = undefined;

  constructor(
    protected service: ProductionOrderService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  protected getPage(page: number) {
    this.service.getPage(page, this.query, this.sortBy, this.state, this.priority).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  create() {
    this.dialogService.open(ProductionOrderDialogComponent).onClose.subscribe(res => {
        if (res) {
          this.getFirstPage();
        }
      },
    );
  }

  update(productionOrder: ProductionOrder) {
    this.dialogService.open(ProductionOrderDialogComponent, {
      context: {
        productionOrder: productionOrder,
      },
    })
      .onClose.subscribe(() => {
      this.getCurrentPage();
    });
  }

  delete(id: string) {
    this.service.delete(id)
      .then(() => {
        this.toastrService.show('Production Order Deleted', `Success`, { status: 'success' });
        this.getCurrentPage();
      })
      .catch(error => {
        this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
      });
  }
}
