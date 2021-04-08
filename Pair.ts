class Pair{
private from:String;
private to:String;

constructor(from:String,to:String){
    this.from=from;
    this.to=to;
}
public equals(obj:Object):boolean{
    let pair:Pair=obj;
    return this.from.equals(pair.from) &&  this.to.equals(pair.to);
}

public hashcode():number{
    return 0;
}
}