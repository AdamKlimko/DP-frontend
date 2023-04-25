import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SemiProductOrderService} from '../../../../@core/services/semi-product-order.service';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {SemiProductOrder} from '../../../../@core/data/semi-product-order';
import {BomItem} from '../../../../@core/data/bom-item';

@Component({
  selector: 'ngx-semi-product-order-tab',
  templateUrl: './semi-product-order-tab.component.html',
  styleUrls: ['./semi-product-order-tab.component.scss'],
})
export class SemiProductOrderTabComponent extends PageBaseDirective<SemiProductOrder> implements OnInit {
  @Input() productionOrderId: string;
  @Output() reserveEmitter = new EventEmitter<BomItem>();
  @Output() purchaseEmitter = new EventEmitter<BomItem>();
  displayedColumns = ['id', 'partNumber', 'manufacturer', 'uom', 'storedQuantity', 'quantity', 'state', 'action'];
  tableOptions = { edit: false, remove: false, reserve: true, order: true };
  constructor(protected service: SemiProductOrderService) {
    super(service);
  }

  ngOnInit(): void {
    this.getFirstPage();
  }

  protected getPage(page: number): void {
    this.service.getPage(this.productionOrderId, page, this.query, this.sortBy).then(res => {
      this.data = res.results;
      this.length = res.totalResults;
      this.pageIndex = page;
    });
  }

  reserve(bomItem: BomItem) {
    this.reserveEmitter.emit(bomItem);
  }

  // Create purchase requisition
  purchase(bomItem: BomItem) {
    this.purchaseEmitter.emit(bomItem);
  }
}
