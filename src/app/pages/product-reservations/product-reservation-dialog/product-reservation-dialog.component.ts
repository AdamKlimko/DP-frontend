import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {CustomerOrder} from '../../../@core/data/customer-order';
import {ProductOrder} from '../../../@core/data/product-order';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../@core/data/product';
import {PageBaseDirective} from '../../../util-components/generalization/page-base.directive';
import {ProductStorageItem} from '../../../@core/data/product-storage-item';
import {ProductStorageItemService} from '../../../@core/services/product-storage-item.service';
import {ProductReservation} from '../../../@core/data/product-reservation';
import {ProductReservationService} from '../../../@core/services/product-reservation.service';

@Component({
  selector: 'ngx-product-reservation-dialog',
  templateUrl: './product-reservation-dialog.component.html',
  styleUrls: ['./product-reservation-dialog.component.scss'],
})
export class ProductReservationDialogComponent extends PageBaseDirective<ProductStorageItem> implements OnInit {

  @Input() customerOrder: CustomerOrder;
  @Input() productOrder: ProductOrder;
  displayedColumns = ['productionOrder', 'partNumber', 'storedQuantity', 'location', 'select'];
  tableOptions = { edit: false, remove: false, select: true };

  product: Product;

  form = new FormGroup({
    reservedQuantity: new FormControl<number>({ value: null, disabled: true }),
    location: new FormControl<string>(null),
    productStorageItem: new FormControl<string>({ value: null, disabled: true }),
  });

  constructor(
    protected ref: NbDialogRef<ProductReservationDialogComponent>,
    protected service: ProductStorageItemService,
    protected productReservationService: ProductReservationService,
    protected toastrService: NbToastrService,
  ) {
    super(service);
  }

  ngOnInit() {
    this.product = this.productOrder.product as Product;
    this.form.controls.reservedQuantity.patchValue(this.productOrder.quantity);
    this.getFirstPage();
  }

  create() {
    const productReservation = new ProductReservation(
      this.form.controls.productStorageItem.value,
      this.customerOrder.id,
      this.productOrder.id,
      this.form.controls.reservedQuantity.value,
      this.form.controls.location.value,
    );
    this.productReservationService.create(productReservation)
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

  selectStorageItem(productStorageItem: ProductStorageItem) {
    this.form.controls.productStorageItem.patchValue(productStorageItem.id);
  }
}
