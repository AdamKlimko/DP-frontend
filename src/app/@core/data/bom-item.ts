import {SemiProduct} from './semi-product';

export class BomItem {
  id: string;
  semiProduct: string | SemiProduct;
  quantity: number;

  constructor(id: string, semiProduct: string | SemiProduct, quantity: number) {
    this.id = id;
    this.semiProduct = semiProduct;
    this.quantity = quantity;
  }
}
