import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../@core/data/product';
import {ProductOrder} from '../../../@core/data/product-order';
import {NbToastrService} from '@nebular/theme';
import {TableBaseDirective} from '../../../util-components/generalization/table-base.directive';

export interface ProductTableOptions {
  edit: boolean;
  remove: boolean;
  add: boolean;
}

@Component({
  selector: 'ngx-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent extends TableBaseDirective<Product> {
  @Input() tableOptions: ProductTableOptions = { edit: false, remove: false, add: false };
  @Output() addEmitter = new EventEmitter<ProductOrder>();

  constructor(private toastrService: NbToastrService) {
    super();
  }

  addProduct(id: string, quantity: any) {
    if (Number(quantity) > 0) {
      this.addEmitter.emit(new ProductOrder(id, quantity));
    } else {
      this.toastrService.danger('Quantity must be a number > 0');
    }
  }
}
