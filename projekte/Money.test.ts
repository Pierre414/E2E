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
    fiveFranc.times(3);
    expect(fiveFranc.getAmount()).toBe(5);
  });

  test("5 Dollar not equal 5 Franc", () => {
    const fiveDollars = Money.dollar(5);
    const fiveFranc = Money.franc(5);
    expect(fiveDollars).not.toBe(fiveFranc);
  });

  test("Bank implementation", () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(10));
  });

  test("5 Franc times 6  in Dollar", () => {
    const franc = Money.franc(5);
    const result = franc.times(6);
    expect(result).not.toEqual(Money.dollar(30));
  });

  test("Plus returns Sum", () => {
    const five = Money.dollar(5);
    let sum = five.plus(five);
    expect(five).toEqual(sum.addend && sum.augend);
  });

  test("reduce Sum", () => {
    const sum = Money.dollar(3).plus(Money.dollar(4));
    const bank = new Bank();
    const result: Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  });

  test("reduce Money", () => {
    const bank = new Bank();
    const addresult = bank.reduce(Money.dollar(1), "USD");
    expect(addresult).toEqual(Money.dollar(1));
  });

  test("from Franc to Dollar", () => {
    const bank = new Bank();
    bank.setRate({from:"CHF",to:"USD"},2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(result).toEqual(Money.dollar(1));
  });

  test("Franc to Euro", () => {
    const bank = new Bank();
    bank.setRate({from:"CHF",to:"Euro"},3);
    const result = bank.reduce(Money.franc(6), "Euro");
    expect(result).toEqual(Money.euro(2));
  });

  test("Mixed Addition", () => {
    const fifteenFranc= Money.franc(15);
    const fiveEuro = Money.euro(5);
    const bank = new Bank();
    bank.setRate({from:"CHF",to:"Euro"},3);
    const tenEuro = bank.reduce(fiveEuro.plus(fifteenFranc), "Euro");
    expect(tenEuro).toEqual(Money.euro(10));
  });

  test("Sum adds Money", () => {
    const fiveEuro = Money.euro(5);
    const fifteenFranc = Money.franc(15);
    const bank = new Bank();
    bank.setRate({from:"CHF",to:"Euro"},3);
    const sum= new Sum(fiveEuro, fifteenFranc)
    const addSum=sum.plus(fiveEuro);
    const fifteenEuro = bank.reduce(addSum, "Euro");
    expect(fifteenEuro).toEqual(Money.euro(15));
  });

  test("Sum times 2 is equal 20", () => {
    const fiveEuro = Money.euro(5);
    const fifteenFranc = Money.franc(15);
    const bank = new Bank();
    bank.setRate({from:"CHF",to:"Euro"},3);
    const sum= new Sum(fiveEuro, fifteenFranc).times(2);
    const twentyEuro = bank.reduce(sum, "Euro");
    expect(twentyEuro).toEqual(Money.euro(20));
  });
});
