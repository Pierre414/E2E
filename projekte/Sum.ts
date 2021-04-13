import { Expression, Money } from "./Money";
import { Bank } from "./Bank";

export class Sum implements Expression {
  readonly augend: Expression;
  readonly addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.addend = addend;
    this.augend = augend;
  }
  public reduce(bank: Bank, to: String): Money {
    const amount: number =
      this.augend.reduce(bank, to).getAmount() +
      this.addend.reduce(bank, to).getAmount();
    return new Money(amount, to);
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }
}
