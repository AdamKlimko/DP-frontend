import {SemiProduct} from './semi-product';
import {ProductionOrder} from './production-order';

export class SemiProductReservation {
  id: string;
  semiProduct: string | SemiProduct;
  productionOrder: string | ProductionOrder;
  reservedQuantity: number;
  location: string;

  constructor(semiProduct: string | SemiProduct,
              productionOrder: string | ProductionOrder,
              reservedQuantity: number,
              location: string) {
    this.semiProduct = semiProduct;
    this.productionOrder = productionOrder;
    this.reservedQuantity = reservedQuantity;
    this.location = location;
  }
}
