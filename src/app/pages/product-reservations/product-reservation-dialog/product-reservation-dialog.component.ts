import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {ProductOrder} from '../../../@core/data/product-order';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../@core/data/product';

@Component({
  selector: 'ngx-product-reservation-dialog',
  templateUrl: './product-reservation-dialog.component.html',
  styleUrls: ['./product-reservation-dialog.component.scss'],
})
export class ProductReservationDialogComponent implements OnInit {

  @Input() customerOrder: CustomerOrder;
  @Input() productOrder: ProductOrder;

  product: Product;

  form = new FormGroup({
    reservedQuantity: new FormControl<number>(null),
    location: new FormControl<string>(null),
  });

  constructor(
    protected ref: NbDialogRef<ProductReservationDialogComponent>,
  ) { }

  ngOnInit() {
    this.product = this.productOrder.product as Product;
  }

  create() {
  }
}
