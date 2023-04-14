import {Product} from './product';

export class ProductReservation {
  id: string;
  customerOrder: string;
  product: Product;
  reservedQuantity: number;
  productionSeq: string;
  location: string;
}
