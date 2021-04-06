 import { Sum } from "./Sum";
// import { Franc } from "./Franc";


export interface Expression{}
export class Money implements Expression {
  private amount: number;
  private currency: String;
   

  constructor(amount: number, currency: String) {
    this.amount = amount;
    this.currency=currency;
   
  }
  static dollar(amount: number, currency: String='USD'): Money {
    return new Money(amount, 'USD');
  }
  static franc(amount: number,currency:String='CHF'): Money {
    return new Money(amount,'CHF');
  }
  public dollarTimes(multiplier: number) {
    this.amount = this.amount * multiplier;
    return Money.dollar(this.amount, "USD");
  }
  public francTimes(multiplier: number) {
      this.amount=this.amount*multiplier;
      return Money.dollar(this.amount,'CHF');
  }
  public getAmount(): number {
    return this.amount;
  }
  public getCurrency(): String {
    return this.currency;
  }

  public equals(obj: Money): boolean {
    return this.currency == obj.getCurrency() && this.amount == obj.getAmount();
  }
  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }
}
