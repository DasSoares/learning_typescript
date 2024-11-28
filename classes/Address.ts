export default class Address {
  public street: string;
  public number: number;
  public zipCode: string;

  constructor(street: string, number: number, zipCode: string) {
    this.street = street;
    this.number = number;
    this.zipCode = zipCode;
  }

  printStreet() {
    console.log(this.street);
  }
}
