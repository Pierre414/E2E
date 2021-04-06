
import { Money } from "./Money";
import {Expression} from "./Money";
import {Bank} from "./Bank";
import { Sum } from "./Sum";


const { tSImportEqualsDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const { not } = require('expect');

describe('The Money Object',()=>{

test('5 Dollars time 2 is 10', () => {
    const fiveDollars = Money.dollar(5);
    const tenDollars=fiveDollars.dollarTimes(2);
    expect(tenDollars.getAmount()).toBe(10);
});



test('5 Dollar equal 5 Dollar', () => {
    expect(Money.dollar(5)).toStrictEqual(Money.dollar(5));
});

test('5 Franc time 3 is 15', () => {
    const fiveFranc = Money.franc(5);
    const tenFranc=fiveFranc.francTimes(3);
    expect(tenFranc.getAmount()).toBe((15));
});

test('5 Dollar not equal 5 Franc', () => {
    const fiveDollars=Money.dollar(5);
    const fiveFranc=Money.franc(5);
    expect(fiveDollars).not.toBe(fiveFranc);
});              



test('Bank implementation',()=>{
    let sum:Expression= new Sum(Money.dollar(3),Money.dollar(4));
    let bank=new Bank();
    let result:Money=bank.reduce(sum, "USD");
    expect(Money.dollar(7)).toBe(result);
})
});
 
