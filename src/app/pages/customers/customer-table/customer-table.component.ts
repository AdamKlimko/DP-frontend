import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Customer} from '../../../@core/data/customer';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';

@Component({
  selector: 'ngx-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent extends TableBaseDirective<Customer> {
  @Input() dataSource = [];
  @Input() displayedColumns = [];
  @Output() editEmitter = new EventEmitter<Customer>();
  @Output() deleteEmitter = new EventEmitter<string>();
  constructor() {
    super();
  }
}
