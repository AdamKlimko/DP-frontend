import {State} from '../enums/state';
import {Customer} from './customer';
import {Priority} from '../enums/priority';

export class Shipment {
  id: string | undefined;
  state: State;
  customer: string | Customer;
  priority: Priority;
  address: string;
  customerOrders: string[];

  constructor(id: string | undefined,
              state: State,
              customer: string | Customer,
              priority: Priority,
              address: string,
              customerOrders: string[]) {
    this.id = id;
    this.state = state;
    this.customer = customer;
    this.priority = priority;
    this.address = address;
    this.customerOrders = customerOrders;
  }
}
