import {Product} from './product';
import {CustomerOrder} from './customer-order';

export class ProductOrder {
  id: string;
  customerOrder: string | CustomerOrder;
  product: string | Product;
  processed: boolean;
  quantity: number;

  constructor(product: string | Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
