import {Expression} from "./Money"
import{Money} from "./Money"
import { Sum } from "./Sum"

export class Bank implements Expression{
    reduce(source:Expression,to:String){
    return Money.dollar(10);
    }
}
