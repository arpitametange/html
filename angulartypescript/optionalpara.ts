class Parent{
    constructor(public nam:string,public id?:number){
        this.id=id
        this.nam=nam
    }
}

class ch extends Parent{
    constructor (){
        super("arpita")
    }

}
let obej2=new ch()
let obj1=new Parent("arpita")
if(obj1.id!=undefined){
    console.log(obj1.id);}
if(obej2.id!=undefined){
console.log(obej2.id);}
console.log(`object2 ${obej2.nam}`);

////default parameter
function defaut(str:string="arpita") {
    return str
    
}
let r=defaut()
console.log(r);
