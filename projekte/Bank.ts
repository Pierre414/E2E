import { Expression } from "./Money";
import { Sum } from "./Sum";

export class Bank {
  reduce(source: Expression, to: String) {
    return source.reduce(this, to);
  }
  
  private readonly rateMap = new Map<String, number>();
  rate(from: String, to: String): number {
    const pair=this.stringFrom({from:from,to:to});
    if (this.rateMap.has(pair)){
      return this.rateMap.get(pair);
    } else {
      return 1;
    }
  }

  setRate(pair:Pair,rate:number){
    this.rateMap.set( this.stringFrom(pair),rate);
  }

  private stringFrom(pair:Pair){
    return pair.from+"-"+pair.to;
  }

 }
interface Pair {
  readonly from: String;
  readonly to: String;
}
