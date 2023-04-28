import {Component, Input, OnInit} from '@angular/core';
import {PageBaseDirective} from '../../../../util-components/generalization/page-base.directive';
import {SemiProductReservation} from '../../../../@core/data/semi-product-reservation';
import {SemiProductReservationService} from '../../../../@core/services/semi-product-reservation.service';
import {ProductionOrderDetailComponent} from '../production-order-detail.component';

@Component({
  selector: 'ngx-semi-product-reservation-tab',
  templateUrl: './semi-product-reservation-tab.component.html',
  styleUrls: ['./semi-product-reservation-tab.component.scss'],
})
export class SemiProductReservationTabComponent extends PageBaseDirective<SemiProductReservation> implements OnInit {
  @Input() productionOrderId: string;
  displayedColumns = [
    'id', 'semiProductOrder', 'reservedQuantity', 'location',
  ];
  tableOptions = { edit: false, remove: false };
  constructor(
    protected service: SemiProductReservationService,
    protected parent: ProductionOrderDetailComponent,
    ) {
    super(service);
  }

  ngOnInit(): void {
    this.query = this.productionOrderId;
    this.getFirstPage();
    this.parent.dataUpdated.subscribe(() => {
      this.getFirstPage();
    });
  }
}
