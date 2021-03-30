import { Dollar } from "./Dollar";
import { Franc } from "./Franc"
import { Money } from "./Money";



const { tSImportEqualsDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const { not } = require('expect');


test('5 Dollars time 2 is 10', () => {
    const fiveDollars = new Dollar(5,'Dollar');
    let result = fiveDollars.times(2)
    expect(result).toBe((10));
});

test('5 Dollars time 3 is 15', () => {
    const fiveDollars = new Dollar(5,'Dollar');
    let result = fiveDollars.times(3)
    expect(result).toBe((15));
});
test('5 Dollar equal 5 Dollar', () => {
    expect(new Dollar(5,'Dollar')).toStrictEqual(new Dollar(5,'Dollar'))
});

test('5 Franc time 3 is 15', () => {
    const fiveFranc = new Franc(5,'Franc')
    let result = fiveFranc.times(3)
    expect(result).toBe((15));
});

test('5 Dollar not equal 5 Franc', () => {
    const fiveDollars=new Dollar(5,'Dollar');
    const fiveFranc=new Franc(5,'Franc');
    expect(fiveDollars).not.toEqual(fiveFranc)
});                                                                                     
 
