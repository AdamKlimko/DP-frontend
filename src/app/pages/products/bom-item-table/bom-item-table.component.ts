import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {BomItem} from '../../../@core/data/bom-item';

export interface BomItemTableOptions {
  edit: boolean;
  remove: boolean;
  reserve: boolean;
  order: boolean;
}

@Component({
  selector: 'ngx-bom-item-table',
  templateUrl: './bom-item-table.component.html',
  styleUrls: ['./bom-item-table.component.scss'],
})
export class BomItemTableComponent extends TableBaseDirective<BomItem> {
  @Input() tableOptions: BomItemTableOptions;
  @Output() reserveEmitter = new EventEmitter<BomItem>();
  @Output() produceEmitter = new EventEmitter<BomItem>();
  constructor() {
    super();
  }

  reserve(bomItem: BomItem) {
    // Create semi-product reservation
    this.reserveEmitter.emit(bomItem);
  }

  order(bomItem: BomItem) {
    // Create purchase requisition
    this.produceEmitter.emit(bomItem);
  }
}
