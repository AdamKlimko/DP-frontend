import {Component, EventEmitter, Output} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {Shipment} from '../../../@core/data/shipment';

@Component({
  selector: 'ngx-shipment-table',
  templateUrl: './shipment-table.component.html',
  styleUrls: ['./shipment-table.component.scss'],
})
export class ShipmentTableComponent extends TableBaseDirective<Shipment> {
  @Output() addEmitter = new EventEmitter<Shipment>();
  constructor() {
    super();
  }

  add(shipment: Shipment) {
    this.addEmitter.emit(shipment);
  }
}
