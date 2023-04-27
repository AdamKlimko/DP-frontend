import {Currency} from '../enums/currency';
import {State} from '../enums/state';
import {Priority} from '../enums/priority';
import {Customer} from './customer';

export class CustomerOrder {
  id: string | undefined;
  state: State;
  price: number | undefined;
  currency: Currency;
  orderDate: Date;
  productionSeq: string;
  priority: Priority;
  orderProfit: number | undefined;
  customer: string | Customer;

  constructor(state: State,
              price: number,
              currency: Currency,
              orderDate: Date,
              priority: Priority,
              orderProfit: number | undefined,
              customer: string) {
    this.state = state;
    this.price = price;
    this.currency = currency;
    this.orderDate = orderDate;
    this.priority = priority;
    this.orderProfit = orderProfit;
    this.customer = customer;
  }
}
