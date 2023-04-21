import {Product} from './product';
import {CustomerOrder} from './customer-order';

export class ProductOrder {
  id: string;
  customerOrder: string | CustomerOrder;
  product: string | Product;
  processed: boolean;
  quantity: number;

  constructor(customerOrder: string | CustomerOrder, product: string | Product, processed: boolean, quantity: number) {
    this.customerOrder = customerOrder;
    this.product = product;
    this.processed = processed;
    this.quantity = quantity;
  }
}
