import {Expression} from "./Money"
import{Money} from "./Money"
import { Sum } from "./Sum"

export class Bank implements Expression{
    reduce(source:Expression,to:String){
      return source.reduce(this,to);
    }
    rate(from:String,to:String):number{
        return(from.equals("CHF") && to.equals("USD"))
        ?2
        :1;
    }
    private rates:Hashtable=new Hashtable();
        
}
