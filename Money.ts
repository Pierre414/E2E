// import { Dollar } from "./Dollar";
// import { Franc } from "./Franc";

export class Money {
  protected amount: number;
  protected currency: String;

  constructor(amount: number, currency: String) {
    this.amount = amount;
  }
  public dollartimes(multiplier: number) {
    this.amount *= multiplier;
    this.currency="USD";
    return this.currency
    return this.amount;
  }
  public franctimes(multiplier: number) {
    this.amount *= multiplier;
    this.currency="CHF";
    return this.currency
    return this.amount;
  }
  public getamount(): number {
    return this.amount;
  }
  public getcurrency(): String {
    return this.currency;
  }
  static dollar(amount: number, currency: String): Money {
    return new Money(amount, currency);
  }
  static franc(amount: number, currency: String): Money {
    return new Money(amount, currency);
  }
  public equals(obj: Money): boolean {
    return this.currency == obj.getcurrency() && this.amount == obj.getamount();
  }
  public plus(addend:Money):Money{
      return new Money(this.amount+addend.amount,this.currency);
  }
}
