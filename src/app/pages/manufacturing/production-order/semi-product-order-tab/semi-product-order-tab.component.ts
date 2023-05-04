import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SemiProductOrderService} from '../../../../@core/services/semi-product-order.service';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {SemiProductOrder} from '../../../../@core/data/semi-product-order';
import {ProductionOrderDetailComponent} from '../production-order-detail/production-order-detail.component';
import {State} from '../../../../@core/enums/state';

@Component({
  selector: 'ngx-semi-product-order-tab',
  templateUrl: './semi-product-order-tab.component.html',
  styleUrls: ['./semi-product-order-tab.component.scss'],
})
export class SemiProductOrderTabComponent extends PageBaseDirective<SemiProductOrder> implements OnInit {
  @Input() productionOrderId: string;
  @Output() reserveEmitter = new EventEmitter<SemiProductOrder>();
  @Output() purchaseEmitter = new EventEmitter<SemiProductOrder>();
  @Output() canAssembleEmitter = new EventEmitter<boolean>();
  displayedColumns = [
    'state', 'id', 'partNumber', 'description', 'manufacturer', 'uom', 'storedQuantity', 'quantity', 'action',
  ];
  tableOptions = { edit: false, remove: false, reserve: true, order: true };
  constructor(
    protected service: SemiProductOrderService,
    private parent: ProductionOrderDetailComponent,
    ) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
    this.canAssembleEmitter.emit(this.canAssemble());
    this.parent.dataUpdated.subscribe(() => {
      this.getFirstPage();
      this.canAssembleEmitter.emit(this.canAssemble());
    });
  }

  protected getPage(page: number): void {
    this.service.getPage(this.productionOrderId, page, this.query, this.sortBy).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  reserve(semiProductOrder: SemiProductOrder) {
    this.reserveEmitter.emit(semiProductOrder);
  }

  purchase(semiProductOrder: SemiProductOrder) {
    this.purchaseEmitter.emit(semiProductOrder);
  }

  canAssemble(): boolean {
    let count = 0;
    this.data.forEach(spo => {
      if (spo.state === State.PROCESSED) { count++; }
    });
    return this.length === count;
  }
}
