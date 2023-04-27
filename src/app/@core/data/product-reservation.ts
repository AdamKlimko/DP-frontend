import {CustomerOrder} from './customer-order';
import {ProductOrder} from './product-order';
import {ProductStorageItem} from './product-storage-item';

export class ProductReservation {
  id: string;
  productStorageItem: string | ProductStorageItem;
  customerOrder: string | CustomerOrder;
  productOrder: string | ProductOrder;
  reservedQuantity: number;
  location: string;

  constructor(productStorageItem: string | ProductStorageItem,
              customerOrder: string | CustomerOrder,
              productOrder: string | ProductOrder,
              reservedQuantity: number,
              location: string) {
    this.productStorageItem = productStorageItem;
    this.customerOrder = customerOrder;
    this.productOrder = productOrder;
    this.reservedQuantity = reservedQuantity;
    this.location = location;
  }
}
