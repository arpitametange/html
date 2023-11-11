interface  person2{
 name:string;
description():void;

}

class p implements  person2{
    description(): void {
        console.log('this sf s');
        
    }
    name: string='arpita';

}
let object=new p()
console.log(object.description);

type test2 ={d:string,h:string}
let obj0:test2={d:'arpita',h:'ankita'}
console.log(obj0.d);

abstract class Neww{
    lastname:string='arpita'
    abstract firstname:string
    abstract sirname:string
}

class childnew extends Neww{
    firstname: string='arpita'
    sirname: string='metange'
}
let obj=new childnew()
console.log(obj.sirname
    );

interface newinterface{
    name:string
    id:number
    number:number

}
class childinterface implements newinterface{
 name: string='cindrella'
 id: number=12
 number: number=99
}
let ob=new childinterface()
console.log(ob.name);
console.log(ob.id);

