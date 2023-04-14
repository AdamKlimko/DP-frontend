import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Customer} from '../../../@core/data/customer';

@Component({
  selector: 'ngx-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent {
  displayedColumns: string[] = [
    'name', 'description', 'country', 'action',
  ];

  @Input() dataSource = [];
  @Output() editEmitter = new EventEmitter<Customer>();
  @Output() deleteEmitter = new EventEmitter<string>();
  constructor() { }

  edit(customer: Customer): void {
    this.editEmitter.emit(customer);
  }

  delete(id: string): void {
    this.deleteEmitter.emit(id);
  }
}
