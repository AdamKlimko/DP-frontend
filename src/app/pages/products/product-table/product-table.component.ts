import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {

  displayedColumns: string[] = [
    'partNumber', 'description', 'uom', 'size', 'storedQuantity',
  ];

  @Input() dataSource = [];
  constructor() { }
}
