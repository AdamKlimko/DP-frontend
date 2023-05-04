import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableBaseDirective} from '../../../../util-components/generalization/table-base.directive';
import {SemiProduct} from '../../../../@core/data/semi-product';
import {NbToastrService} from '@nebular/theme';
import {BomItem} from '../../../../@core/data/bom-item';

export interface SemiProductTableOptions {
  edit: boolean;
  remove: boolean;
  add: boolean;
}

@Component({
  selector: 'ngx-semi-product-table',
  templateUrl: './semi-product-table.component.html',
  styleUrls: ['./semi-product-table.component.scss'],
})
export class SemiProductTableComponent extends TableBaseDirective<SemiProduct> {
  @Input() tableOptions: SemiProductTableOptions = { edit: false, remove: false, add: false };
  @Output() addEmitter = new EventEmitter<BomItem>();

  constructor(private toastrService: NbToastrService) {
    super();
  }

  addSemiProduct(id: string, quantity: any) {
    if (Number(quantity) > 0) {
      this.addEmitter.emit(new BomItem(undefined, id, quantity));
    } else {
      this.toastrService.danger('Quantity must be a number > 0');
    }
  }
}
