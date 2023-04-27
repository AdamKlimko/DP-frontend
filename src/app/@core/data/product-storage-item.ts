import {Product} from './product';
import {ProductionOrder} from './production-order';

export class ProductStorageItem {
  product: string | Product;
  productionOrder: string | ProductionOrder;
  storedQuantity: number;
  location: string;
}
