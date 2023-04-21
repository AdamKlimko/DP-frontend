export class Product {
  id: string | undefined;
  partNumber: string;
  description: string;
  storedQuantity: number;
  uom: string;
  size: string;
  billOfMaterials: [];

  constructor(id: string | undefined,
              partNumber: string,
              description: string,
              storedQuantity: number,
              uom: string,
              size: string) {
    this.id = id;
    this.partNumber = partNumber;
    this.description = description;
    this.storedQuantity = storedQuantity;
    this.uom = uom;
    this.size = size;
  }
}
