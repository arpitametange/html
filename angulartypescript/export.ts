// export function pali(arg:string):boolean{
//     return arg== arg.split("").reverse().join('')
// }

export function pali(){
    console.log("export function");
    
}

abstract class Ne{
    abstract namee():void;
     abstract id():number;
}
class row extends Ne{
    namee(): void {
        console.log("kjdf");
        
    }
    id(): number {
        return 12
    }

}

let object=new row()
object.namee()
console.log(object.id());


