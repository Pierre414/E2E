 import { Sum } from "./Sum";



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
 
  public times(multiplier:number){
  const amount=this.amount*multiplier;
   return new Money(amount,this.currency);
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
