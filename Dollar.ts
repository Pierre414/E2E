import { Money } from "./Money";

export class Dollar extends Money {


    constructor(amount: number,currency:String) {
         super(amount,currency);
        this.amount = amount;
        this.currency=currency;
    }

    public equals(obj: Dollar): boolean {
        return this.currency==obj.getcurrency() && this.amount==obj.getamount();
    }


}
