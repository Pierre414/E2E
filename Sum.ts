import { Expression, Money } from "./Money";

export class Sum implements Expression{
    augend:Money;
    addend:Money;

    constructor(augend:Money,addend:Money){
        this.addend=addend;
        this.augend=augend;
    }
}