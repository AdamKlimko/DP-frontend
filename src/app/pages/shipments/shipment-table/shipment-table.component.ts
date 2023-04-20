import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {Shipment} from '../../../@core/data/shipment';
import {ProductTableOptions} from '../../products/product-table/product-table.component';

@Component({
  selector: 'ngx-shipment-table',
  templateUrl: './shipment-table.component.html',
  styleUrls: ['./shipment-table.component.scss'],
})
export class ShipmentTableComponent extends TableBaseDirective<Shipment> {
  @Input() tableOptions: ProductTableOptions = { edit: false, remove: false, add: false };
  @Output() addEmitter = new EventEmitter<Shipment>();
  constructor() {
    super();
  }

  add(shipment: Shipment) {
    this.addEmitter.emit(shipment);
  }
}
