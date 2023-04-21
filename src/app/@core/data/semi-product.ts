export class SemiProduct {
  id: string;
  partNumber:  string ;
  description:  string;
  manufacturer:  string;
  storedQuantity:  number;
  uom:  string;

  constructor(id: string,
              partNumber: string,
              description: string,
              manufacturer: string,
              storedQuantity: number,
              uom: string) {
    this.id = id;
    this.partNumber = partNumber;
    this.description = description;
    this.manufacturer = manufacturer;
    this.storedQuantity = storedQuantity;
    this.uom = uom;
  }
}
