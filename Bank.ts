import {Expression} from "./Money"
import{Money} from "./Money"
import { Sum } from "./Sum"

export class Bank implements Expression{
    reduce(source:Expression,to:String){
       let sum:Sum;
       let amount:number=sum.augend.getAmount()+sum.addend.getAmount();
       return new Money(amount,to);
    }
}
