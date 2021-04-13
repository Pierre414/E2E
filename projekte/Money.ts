import { Bank } from "./Bank";
import { Sum } from "./Sum";

export interface Expression {
  reduce(bank: Bank, to: String): Money;

  plus(addend: Expression): Expression;

  times(multiplier: number);
}
export class Money implements Expression {
  private readonly amount: number;
  private readonly currency: String;

  constructor(amount: number, currency: String) {
    this.amount = amount;
    this.currency = currency;
  }
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
  static euro(amount: number) {
    return new Money(amount, "Euro");
  }

  public times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): String {
    return this.currency;
  }

  public equals(obj: Money): boolean {
    let money: Money = obj;
    return this.currency == obj.getCurrency() && this.amount == obj.getAmount();
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: String): Money {
    let rate: number = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}
