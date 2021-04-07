import { Money } from "./Money";
import { Expression } from "./Money";
import { Bank } from "./Bank";
import { Sum } from "./Sum";

const { tSImportEqualsDeclaration } = require("@babel/types");
const { test, expect } = require("@jest/globals");
const { not } = require("expect");

describe("The Money Object", () => {
  test("5 Dollars time 2 is 10", () => {
    const fiveDollars = Money.dollar(5);
    const tenDollars = fiveDollars.times(2);
    expect(tenDollars.getAmount()).toBe(10);
  });

  test("5 Dollar equal 5 Dollar", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  });

  test("5 Dollar not equal 6 Dollar", () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });

  test("5 Franc time 3 is 15", () => {
    const fiveFranc = Money.franc(5);
    const tenFranc = fiveFranc.times(3);
    expect(tenFranc.getAmount()).toBe(15);
  });

  test("fievFranc stay fiveFranc", () => {
    const fiveFranc = Money.franc(5);
    const tenFranc = fiveFranc.times(3);
    expect(fiveFranc.getAmount()).toBe(5);
  });

  test("5 Dollar not equal 5 Franc", () => {
    const fiveDollars = Money.dollar(5);
    const fiveFranc = Money.franc(5);
    expect(fiveDollars).not.toBe(fiveFranc);
  });

  test("Bank implementation", () => {
    let five:Money=Money.dollar(5);
    let sum:Expression=five.plus(five);
    let bank:Bank=new Bank();
    let reduced:Money=bank.reduce(sum,"USD");
    expect(reduced).toEqual(Money.dollar(10));

  });

  test("5 Franc times 6  in Dollar", () => {
    const franc = Money.franc(5);
    const result = franc.times(6);
    expect(result).not.toEqual(Money.dollar(30));
  });

  test("Plus returns Sum",()=>{
    let five:Money=Money.dollar(5);
    let result:Expression=five.plus(five);
    let sum:Sum=result;
    expect(five).toEqual(sum.addend && sum.augend);
  })
});
