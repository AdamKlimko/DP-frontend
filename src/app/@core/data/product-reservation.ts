import {CustomerOrder} from './customer-order';
import {ProductOrder} from './product-order';

export class ProductReservation {
  id: string;
  customerOrder: string | CustomerOrder;
  productOrder: string | ProductOrder;
  reservedQuantity: number;
  location: string;

  constructor(customerOrder: string | CustomerOrder,
              productOrder: string | ProductOrder,
              reservedQuantity: number,
              location: string) {
    this.customerOrder = customerOrder;
    this.productOrder = productOrder;
    this.reservedQuantity = reservedQuantity;
    this.location = location;
  }
}
