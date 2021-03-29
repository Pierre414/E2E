const { tSImportEqualsDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const { not } = require('expect');
const functions=require('./Money');

test('testmultiplication equal 10',()=>{
    expect(functions.testmultiplication()).toBe(10)

});