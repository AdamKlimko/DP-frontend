import {State} from '../enums/state';
import {Currency} from '../enums/currency';
import {Priority} from '../enums/priority';

export class PurchaseOrder {
  id: string;
  supplier: string;
  state: State;
  price: number;
  currency: Currency;
  priority: Priority;
  wantedDeliveryDate: Date;

  constructor(supplier: string,
              state: State,
              currency: Currency,
              priority: Priority,
              wantedDeliveryDate: Date) {
    this.supplier = supplier;
    this.state = state;
    this.currency = currency;
    this.priority = priority;
    this.wantedDeliveryDate = wantedDeliveryDate;
  }
}
