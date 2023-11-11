// // "use strict";
// // Object.defineProperty(exports, "__esModule", { value: true });
// // exports.imp = void 0;
// // function imp() {
// //     console.log("import function");
// // }
// // exports.imp = imp;


// function palidrom(str) {
//     var lenthg=str.length
//     var middlelen=Math.floor(lenthg/2)
//     for (let index = 0; index < middlelen; index++) {
//      if (str[index]!==str[lenthg-1-index]) {
//         return 'not palindrom'
//      }   
//     }
//     return 'palindrom'
    
// }
// let r=palidrom('aaa')
// console.log(r);





// // let a=1
// // let b=a--
// // console.log(a,b);




// let arra=[1,2,4,[2,3,5]]
// let falt=arra.flat()
// console.log(falt);
// let t=falt.reduce((elemnt,value)=>{
// return elemnt+value
// })
// console.log(t);


// // console.log(_.flatten([1,2,4,[2,3,5]]));

// let str='madam'


// function countstring(str,letter){
//     let count=0
// for(let i=0;i<str.length;i++){
//     if (str.charAt(i)==letter) {
//         count+=1
//     }
// }
// return count
// }
// let rr=countstring('arpita','a')
// console.log(rr);

// function occurenes(str,letter){
//     let count=0
//     for (let index = 0; index < str.length; index++) {
//         const element = str.charAt(index);
//         if (element==letter) {
//             count+=1
//         }
        
//     }
//     return count
    
    
//     }
//     let occ=occurenes('arpitaa','a')
//     console.log(occ);

//     let v='this si the strin'
//     v='hdjsh'
//         console.log(v);

//         function fn(){
//             console.log('tjis f');
//         }
//         console.log('type of funciton',typeof(fn));
//         console.log(typeof(a={}));
//         let apy=[1,2,3,4,5,4,3,2]
//         apy.forEach(element=>{
//             console.log(element);
//         })
//         let au=0
//         let b=3
//         console.log(au>b?true:false);
//  function objearpita(a,b){
//  return a+b
// }
// let yo=objearpita(1,2)
// console.log(yo);


// let po='madam'
// for (let index = 0; index < po.length; index++) {
//     let count=0
//     let element = po[index];
//     for (let i = 0; i < po.length; i++) {
//         if (element==po[i]) {
//             count++
//         }
        
//     }
//     console.log(element+"="+count);
// }

// function calbalc(val) {
//     val()
//     let oueter=12
//    function inner(){
//     console.log(oueter,'adjkfsafi');
//    }
//    return inner
    
// }
// function Perosn(a,b,c){
//     this.a=a
//     this.b=b
//     this.c=c
// }
// let obj=new Perosn(1,2,3)
// console.log(obj.a);

// let set=new Map()
// set.set(12,'arpita')
// set.set(13,'arpita')
// set.set(14,'arpita')
// set.set(15,'arpita')
// set.forEach((element,value)=>{
//     console.log(value,element);
// })

// let arrobj=[{name:'arpita',id:12,value:'100'},{name:'arpita',id:12,value:'121'},{name:'arpita',id:12,value:'124'}]
// let na=arrobj.filter(element=>{
//     return element.id>'100'
// })
// console.log(na);

// // let d=[...arrayreduce]
// // let o=JSON.parse(JSON.stringify(d))

// // console.log('last elemt',o);
// // for (let index = arrayreduce.length-1; index >=0; index--) {
// //     const element = arrayreduce[index];
// //     console.log('reverse',element);
    
// // }

// let avg={
//     naem:'adjfkl',
//     show:function () {
//         console.log('this si the metheo');
//     }
// }

// let avg1={
//     id:'adjfarpitakl',
//    name:'ajdkf',
//    sjdjfk:'dkf',
//    obje:{
//     newjh:'kjdksff'
//    }
// }
// let spread=Object.assign({},avg1)
// console.log(spread);
// // console.log(Object.entries);
// let clone=JSON.parse(JSON.stringify(avg1))
// console.log(clone);


// let w=10
// let e=11
// w=w+e
// e=w-e
// w=w-e
// console.log(w,e);
// let countt=0
// let emput=[]
// let strincout='TCS the Indian IT Giant Company'
// for (let index = strincout.length-1; index >=0; index--) {
//     const element = strincout.charAt(index)
// if ((element=='a' || element=='e'|| element=='i' || element=='o' || element=='u' || element=='A') && (index%2==0)) {
//     emput.push(element)
//     countt++
// }
// }
// console.log(countt);
// console.log(emput);
// let newarray=[]
// const arrayOfNumbers = ["Kamat","Memon", "Nashpati", "Taimur", "Menon", "Kamat", "Andy", "Taimur" ]
// arrayOfNumbers.forEach(element=>{
//     if (newarray.includes(element)===false) {
//         newarray.push(element)
//     }
// })
// console.log(newarray);
// let acou='arpita'
// for (let index = 0; index < acou.length; index++) {
//     let j=0
//     let element = acou[index];
//     for (let i = 0; i < acou.length; i++) {
//         if (element==acou[i]) {
//             j++
//         }
        
//     }
//     console.log(element,j);
// }
 


// function prime(nu,last) {
//     let count=0
//     let emply=[]
//     for (let index = nu; count < last; index++) {
//         let isprime=true
//         for (let i = 2; i < index; i++) {
//             if (index%i==0) {
//                 isprime=false
//                 break
//             }
            
//         }
//         if (isprime) {
//            emply.push(index)
//             count++
//         }

// }
// console.log(emply);
// }
// prime(2,10)


// let z=1

// for (let index = 1; index <=5; index++) {
//   z=z*index
    
// }
// console.log(z);


// let arrayreduce=[190,78,2,3,9,99]
// arrayreduce.sort((currentvalue,value)=>{
// return currentvalue>value?1:-1
// })

// console.log(arrayreduce);


// function palindrom(n) {
//     let no=n.length
//     let m=Math.floor(no/2)
// for (let index = 0; index < m; index++) {

// if (n[index]==n[no-1-index]) {
//     return 'not prime'
// }    
// }
// return 'palindrom'
// }
// let p=palidrom('mamk')
// console.log(p);

// let mapjd=new Map()
// mapjd.set('idn',23)
// mapjd.set('ida',24)
// mapjd.set('idnfa',25)
// mapjd.set('iddna',26)
// mapjd.set('idnd',27)
// for(let key of mapjd.keys()){
//     let elemt=mapjd.get(key)
//     console.log(key,elemt);
// }


// let setk=new Set()
// setk.add('idn')
// setk.add('ida')
// setk.add('idnfa')
// setk.add('iddna')
// setk.add('idnd')
// for(let key of setk){
//     console.log(key);
// }
// console.log(mapjd.get('idn'));


// let thisis=true
// let promise=new Promise((resolve,reject)=>{
// if (thisis) {
//     resolve('htis is the resolve')
    
// }else{
//     reject("this is the reject")
// }


// }).then(success=>console.log('this is hte succes',success))
// .catch(failure=>console.log('this is the failure',failure))
// .finally(()=>console.log('thisis hte default'))



let str='madam'



//palindrom
function palindrom(str) {
    let lenthg=str.length
    let halflenght=Math.floor(lenthg/2)
    for (let index = 0; index < halflenght; index++) {

        if (str[index]!=str[lenthg-1-index]) {
            return 'not palindrom'
        }
    }
    return 'palindrom'
}
let f=palindrom('mafdam')
console.log(f);

function leap(yr) {
    if (yr%100==0 && yr%400==0 || yr%100!=0 && yr%4==0) {
        console.log('this si th leap yr');
    }
    else{
        console.log('this is not the century yr');
    }
}
leap(1900)

function even(numb){
    if (numb%2==0) {
        console.log('this is the even number');
    }
    else{
        console.log('this is not');
    }
}
even(11)



a=10 
b=a++    
c=++a
console.log(a,b,c);

//sum two array
let arrray=[1,0,2,3,4]
let array2=[3,5,6,7,8,13]
var sum=arrray.map((element,inddex)=>{
    return element+array2[inddex]
})
console.log(sum);

console.log((6>5>4));
let x=10  
let y=x++   
let z=++x
console.log('x,y,z',x,y,z);

