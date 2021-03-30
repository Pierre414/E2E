export class Money {

    protected amount: number
    protected currency:String

    constructor(amount: number,currency:String) {
        this.amount = amount
    }
    public times(multiplier: number) {
        this.amount *= multiplier;
        return this.amount;
    }
    public getamount(): number {
        return this.amount  
    }
    public getcurrency():String{
        return this.currency;
    }
    public equals(obj: Money): boolean {
        return this.currency==obj.getcurrency() && this.amount==obj.getamount();
        
     }                          


 
}
