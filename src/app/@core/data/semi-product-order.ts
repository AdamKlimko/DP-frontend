import {State} from '../enums/state';

export class SemiProductOrder {
  productionOrder: string;
  bomItem: string;
  state: State;
}
