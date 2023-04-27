import {Product} from './product';
import {CustomerOrder} from './customer-order';
import {State} from '../enums/state';

export class ProductOrder {
  id: string;
  customerOrder: string | CustomerOrder;
  product: string | Product;
  productionSeq: string;
  state: State;
  quantity: number;
  unitPrice: number;

  constructor(customerOrder: string | CustomerOrder,
              product: string | Product,
              productionSeq: string,
              state: State,
              quantity: number,
              unitPrice: number) {
    this.customerOrder = customerOrder;
    this.product = product;
    this.productionSeq = productionSeq;
    this.state = state;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}
