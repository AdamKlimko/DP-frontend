import {Currency} from '../enums/currency';
import {State} from '../enums/state';
import {Priority} from '../enums/priority';

export class CustomerOrder {
  state: State;
  price: number;
  currency: Currency;
  orderDate: Date;
  productionSeq: string;
  priority: Priority;
  orderProfit: number | undefined;
  customer: string;
  products: [];
}
