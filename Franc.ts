import { Money } from "./Money";

export class Franc extends Money {

    constructor(amount: number,currency:String) {
        super(amount,currency)
        this.amount=amount;
        this.currency=currency;


    }
    public equals(obj: Franc): boolean {
        return this.currency==obj.getcurrency() && this.amount==obj.getamount();
     }

}

