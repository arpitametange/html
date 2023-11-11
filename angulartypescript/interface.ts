abstract class person{
    name:string="arpita"
    show():string{
        return "jfkd"
    }
    abstract str():string;
    abstract boolean():boolean;
    abstract number():number;
}
class newclass extends person{
     str():string{
        return "arpota"
     }
     boolean():boolean{
       return true
     }
     number():number{
        return 12
     }    
}

var objec=new newclass()
console.log(objec.str(),objec.boolean(),objec.number(),objec.name,objec.show());
let objec1=new newclass()
console.log(objec.str(),objec.boolean(),objec.number(),objec.name,objec.show());

console.log("/////////////////////////");

interface cls {
   gps():string
}
class newclass implements cls{
    gps(): string {
        return "gps is specied"
    }
}
 var objec=new newclass()
console.log(objec.gps());
