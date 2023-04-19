import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {ProductOrder} from '../../../@core/data/product-order';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductReservationService} from '../../../@core/services/product-reservation.service';
import {Product} from '../../../@core/data/product';
import {ProductReservation} from '../../../@core/data/product-reservation';

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
    private service: ProductReservationService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.product = this.productOrder.product as Product;
  }

  create() {
    const productReservation = new ProductReservation(
      this.customerOrder.id,
      this.productOrder.id,
      this.form.controls.reservedQuantity.value,
      this.form.controls.location.value,
    );
    this.service.create(productReservation)
      .then(
        () => {
          this.ref.close();
          this.toastrService.show('Product Reservation Created', `Success`, { status: 'success' });
        },
        (error) => {
          this.toastrService.show(error.error.message, 'Error', { status: 'danger', duration: 0 });
        },
      );
  }
}
