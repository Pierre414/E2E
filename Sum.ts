import { Expression, Money } from "./Money";
import {Bank} from "./Bank"

export class Sum implements Expression{
    augend:Money;
    addend:Money;

    constructor(augend:Money,addend:Money){
        this.addend=addend;
        this.augend=augend;
    }
    public reduce(bank:Bank,to:String):Money{
        let amount:number=this.augend.getAmount()+this.addend.getAmount();
        return new Money(amount,to)
    }
}
