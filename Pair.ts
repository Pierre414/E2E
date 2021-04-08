class Pair{
private from:String;
private to:String;

constructor(from:String,to:String){
    this.from = from;
    this.to = to;
}
public equals(obj:Object):boolean{
    const pair:Pair = obj;
    return this.from == (pair.from) &&  this.to == (pair.to);
}

public hashcode():number{
    return 0;
}
}
