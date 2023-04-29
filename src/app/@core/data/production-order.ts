import {State} from '../enums/state';
import {Priority} from '../enums/priority';
import {ProductOrder} from './product-order';
import {Currency} from '../enums/currency';

export class ProductionOrder {
  id: string | undefined;
  productOrder: string | ProductOrder;
  productionSeq: string;
  state: State;
  wantedDeliveryDate: Date;
  startDateTime: Date;
  endDateTime: Date;
  priority: Priority;
  cost: number;
  currency: Currency;

  constructor(productOrder: string | ProductOrder,
              productionSeq: string,
              state: State,
              wantedDeliveryDate: Date,
              startDateTime: Date,
              endDateTime: Date,
              priority: Priority,
              currency: Currency) {
    this.productOrder = productOrder;
    this.productionSeq = productionSeq;
    this.state = state;
    this.wantedDeliveryDate = wantedDeliveryDate;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.priority = priority;
    this.currency = currency;
  }
}
