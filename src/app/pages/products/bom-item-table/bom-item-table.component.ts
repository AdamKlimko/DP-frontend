import {Component} from '@angular/core';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';
import {BomItem} from '../../../@core/data/bom-item';


@Component({
  selector: 'ngx-bom-item-table',
  templateUrl: './bom-item-table.component.html',
  styleUrls: ['./bom-item-table.component.scss'],
})
export class BomItemTableComponent extends TableBaseDirective<BomItem> {
  constructor() {
    super();
  }
}
