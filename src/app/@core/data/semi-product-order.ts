import {State} from '../enums/state';
import {BomItem} from './bom-item';

export class SemiProductOrder {
  id: string;
  productionOrder: string;
  bomItem: string | BomItem;
  state: State;
  quantity: number;
}
