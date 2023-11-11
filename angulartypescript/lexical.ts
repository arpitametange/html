class lexi {
    private _age:number
constructor( age:number){
    this._age=age
}
    Sha=()=>{
      return  this._age=this._age-1
    }
    age(){
        return this._age
    }
   
}
let object=new lexi(12)
// object.Sha()
let v=object.Sha
v();
console.log(object.age());
