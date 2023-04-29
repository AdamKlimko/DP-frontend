import {State} from '../enums/state';
import {Customer} from './customer';
import {Priority} from '../enums/priority';
import {CustomerOrder} from './customer-order';

export class Shipment {
  id: string | undefined;
  state: State;
  customer: string | Customer;
  priority: Priority;
  address: string;
  customerOrders: string[] | CustomerOrder[];

  constructor(id: string | undefined,
              state: State,
              customer: string | Customer,
              priority: Priority,
              address: string,
              customerOrders: string[] | CustomerOrder[]) {
    this.id = id;
    this.state = state;
    this.customer = customer;
    this.priority = priority;
    this.address = address;
    this.customerOrders = customerOrders;
  }
}
