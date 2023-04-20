import {Currency} from '../enums/currency';
import {State} from '../enums/state';
import {Priority} from '../enums/priority';
import {ProductOrder} from './product-order';
import {ProductReservation} from './product-reservation';
import {Customer} from './customer';

export class CustomerOrder {
  id: string | undefined;
  state: State;
  price: number;
  currency: Currency;
  orderDate: Date;
  productionSeq: string;
  priority: Priority;
  orderProfit: number | undefined;
  customer: string | Customer;
  productOrders: string[] | ProductOrder[];
  productReservations: string[] | ProductReservation[];

  constructor(state: State,
              price: number,
              currency: Currency,
              orderDate: Date,
              productionSeq: string,
              priority: Priority,
              orderProfit: number | undefined,
              customer: string) {
    this.state = state;
    this.price = price;
    this.currency = currency;
    this.orderDate = orderDate;
    this.productionSeq = productionSeq;
    this.priority = priority;
    this.orderProfit = orderProfit;
    this.customer = customer;
  }
}
