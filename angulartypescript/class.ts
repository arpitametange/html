class bank{
    constructor(public name:string,public id:number){
        this.name=name;
        this.id=id;
    }
}

class child extends bank{
    constructor(){
        super("this",12)
    }
}

let obj=new bank("arpota",22)
console.log(obj);

let obj2=new child()
console.log(obj2);

