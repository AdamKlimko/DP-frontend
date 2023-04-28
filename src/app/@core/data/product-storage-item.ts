import {Product} from './product';
import {ProductionOrder} from './production-order';

export class ProductStorageItem {
  id: string;
  product: string | Product;
  productionOrder: string | ProductionOrder;
  storedQuantity: number;
  location: string;

  constructor(product: string | Product,
              productionOrder: string | ProductionOrder,
              storedQuantity: number,
              location: string) {
    this.product = product;
    this.productionOrder = productionOrder;
    this.storedQuantity = storedQuantity;
    this.location = location;
  }
}
