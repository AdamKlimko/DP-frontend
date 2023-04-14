export class Customer {
  id: string;
  name: string;
  description: string;
  country: string;

  constructor(id: string, name: string, description: string, country: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.country = country;
  }
}
