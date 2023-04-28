import {ProductionOrder} from './production-order';
import {SemiProductStorageItem} from './semi-product-storage-item';
import {SemiProductOrder} from './semi-product-order';

export class SemiProductReservation {
  id: string;
  semiProductStorageItem: string | SemiProductStorageItem;
  productionOrder: string | ProductionOrder;
  semiProductOrder: string | SemiProductOrder;
  reservedQuantity: number;
  location: string;

  constructor(semiProductStorageItem: string | SemiProductStorageItem,
              productionOrder: string | ProductionOrder,
              semiProductOrder: string | SemiProductOrder,
              reservedQuantity: number,
              location: string) {
    this.semiProductStorageItem = semiProductStorageItem;
    this.productionOrder = productionOrder;
    this.semiProductOrder = semiProductOrder;
    this.reservedQuantity = reservedQuantity;
    this.location = location;
  }
}
