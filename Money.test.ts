// import { Dollar } from "./Dollar";
// import { Franc } from "./Franc"
import { Money } from "./Money";



const { tSImportEqualsDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const { not } = require('expect');


test('5 Dollars time 2 is 10', () => {
    const fiveDollars = Money.dollar(5,null);
    fiveDollars.dollartimes(2)
    expect(fiveDollars.getamount()).toBe((10));
});

test('5 Dollars time 3 is 15', () => {
    const fiveDollars = Money.dollar(5,'Dollar');
    fiveDollars.dollartimes(3)
    expect(fiveDollars.getamount()).toBe((15));
});
test('5 Dollar equal 5 Dollar', () => {
    expect(Money.dollar(5,'Dollar')).toStrictEqual(Money.dollar(5,'Dollar'))
});

test('5 Franc time 3 is 15', () => {
    const fiveFranc = Money.franc(5,'Franc')
    fiveFranc.franctimes(3)
    expect(fiveFranc.getamount()).toBe((15));
});

test('5 Dollar not equal 5 Franc', () => {
    const fiveDollars=Money.dollar(5,'Dollar');
    const fiveFranc=Money.franc(5,'Franc');
    expect(fiveDollars).not.toBe(fiveFranc)
});              

test('simple Addition',()=>{
    let sum:Money=Money.dollar(5,null).plus(Money.dollar(5,null));
    let sum2:Money=Money.dollar(10,null);
    expect(sum.getamount()).toBe(sum2.getamount());
})


 
