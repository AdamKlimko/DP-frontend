import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductReservation} from '../../../@core/data/product-reservation';

@Component({
  selector: 'ngx-product-reservation-table',
  templateUrl: './product-reservation-table.component.html',
  styleUrls: ['./product-reservation-table.component.scss'],
})
export class ProductReservationTableComponent {
  @Input() dataSource = [];
  @Input() displayedColumns = [];
  @Output() editEmitter = new EventEmitter<ProductReservation>();
  @Output() deleteEmitter = new EventEmitter<string>();
  constructor() { }

  edit(item: ProductReservation): void {
    this.editEmitter.emit(item);
  }

  delete(id: string): void {
    this.deleteEmitter.emit(id);
  }
}
