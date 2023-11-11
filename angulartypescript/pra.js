console.log('this');

function prime(s,e) {
    let count=0
    let isprime
    let store=[]
    for (let index = s; count < e; index++) {
        isprime=true
        for (let i = 2; i < index; i++) {
          if (index%i===0) {
            isprime=false
            break
          }
            
        }
        if (isprime) {
            store.push(index)
            count++
    }   
    }
    console.log(store);
}
prime(3,10)

let a=0
let b=1
for (let index = 0; index <10; index++) {
    console.log(a);
    let sum=a+b
    a=b
    b=sum
    
}
function restpare(p,...arg) {
    console.log(arg);
}
restpare(1,2,3,4,9,9,9,0,8)




// let t=false
// let promisenew=new Promise((resolve,reject)=>{
//     if (t) {
//         resolve('this is hte resolve ssta')
        
//     }else{
//         reject('this is the reject')
//     }

// })
// promisenew.then(success=>console.log('this is the catch',success))
// .catch(failure =>console.log('this is the failure',failure))
// .finally(()=>console.log('this is the fianally'))
// 'use strict'
tho=12
console.log(tho);
let obj={}
// delete obj
console.log(obj);
console.log('*****=============');
function defaultpara(a,b=2) {
    console.log(a,b);
    
}
defaultpara(1212,8)

let objext={
    id:12,
    nam:'arpota'
}
let {id,nam}=objext
console.log(id,nam);
let oppp=[1,2,4,3];
let[num,num2,num3=10]=oppp;
console.log(num,num2,num3);
(function selfinvode() {
    console.log('this ishte self invoked fun');
})()
let arrow=()=>console.log('this is the arrow function')
arrow()
arrownormal=[1,2,3,4]

arrownormal.forEach(function(element,index,array) {
    
 console.log(element,index,array);
 })
console.log("***");
 array=[1,2,3,4,5,6,7]
 let new1=array.filter((element)=>{
    return element>3
 })
console.log(new1);

// let promiseis=false
// let createpromise=new Promise((resolve,reject)=>{
//     if (promiseis) {
//         resolve('this is the resovle')
        
//     }
//     else{
//         reject("this is the reject")
//     }

// })
// createpromise.then((success)=>{console.log(success,'this is ht esucces');})



// .catch((failure)=>{
//     console.log(failure,'this the failure');
// }).finally(()=>{
//     console.log('this is th efinnaly');
// })

let c=1
for (let index = 1; index <=5; index++) {
   c=c*index
    
}
console.log(c);


for (let index = 2; index < num; index++) {
    if (num%index==0 ) {
    return 'not prime'

       
    }       
    return 'prime'

}

var p=prime(15);
console.log(p);

function prime (num) {
    // if (num<2) {
    //     return 'not'
    // }
    for (let index = 2; index < num; index++) {
        if (num%index==0 ) {
        return 'not prime'
    
           
        }       

    }
    return 'prime'
}
var p=prime(15);
console.log(p);

let no=3
if (no%2==0) {
    console.log(no, 'is prime no');
}
let average=0
let reow=[1,2,3,4,3,4]
let reo2=reow.reduce((index,nextvalue,array)=>{
  index=index+nextvalue
  if (array==reow.length-1) {
     average=index/reow.length 
  }
  return index
})
console.log(average);

let n=reow.sort((a,b)=>{
 return a>b?-1:1
})
console.log(n);




let reverserstr="apirat"
for (let index = reverserstr.length-1; index >=0; index--) {
    const element = reverserstr.charAt(index)
    console.log(element);
}
let t=14
function closure(){
    let a=12
    function closure2(){
        console.log('this is mine');
        console.log(a,t);

    }
    return closure2
}
closure()()
let str='arpita metange'
let em=''
for (let index = str.length-1; index >=0; index--) {
let elem=str.charAt(index)
if (elem==' ') {
    break
}
em=em+elem
}
console.log(em);

let arr=[1,2,4]
let second=[5,6,7]
let newarra=arr.concat(second)
console.log(newarra);
function fun(p){
    for (let index = 2; index < p; index++) {
        if(p%index==0){
            return 'not prime'
        }
    }
    return 'prime'
        
    }

let rj=fun(15)
console.log(rj);
let map=new Map()
map.set('name','arotja')
map.set('sirnamee','anikta')
map.set('janename','akrit')
for(let t of map.keys()){
    let c=map.get(t)
    console.log(t,c);
}


// function remove(array1){
//     for (let index = 0; index < array1.length; index++) {
//         if (uni.indexOf(array1[index])) {
//             uni.push(array1[index])
//         }
//     }
//     return uni        
// }
// console.log(remove(nearra));

let nearra=[1,2,3,4,3,4,2,3]
let uni=[]
nearra.forEach(elem=>{
    if (uni.includes(elem)===false) {
        uni.push(elem)
    }
})
console.log(uni);

let uarray=[11,22,33,22,11]
let uniquearray=[]
uarray.forEach(elem=>{
    if (uniquearray.includes(elem)===false) {
       return uniquearray.push(elem)
    }
})
console.log(uniquearray);

function closure(){
    let v1=12
    function closure2(){
        let r=13
        console.log(v1,r);
    }
    return closure2
}
closure()()
function callback(callb){
callb()

}
function forcall(){
    console.log('for call back function');
}
callback(forcall)


let l=0
let k=1
for (let index = 0; index <= 10; index++) {
    console.log(l);
    let sum=l+k
    l=k
    k=sum

}

function primemo(no,no2){
     let ispiirmme;
     let empu=[]
     let count=0
     for (let index = no; count < no2; index++) {
          ispiirmme=true  
          for (let i = 2; i < index; i++) {
            if (index%i==0) {
                ispiirmme=false
                break
            }
          }      
        if (ispiirmme) {
            empu.push(index)
            count++
        }
     }
     console.log(empu);

}

primemo(3,10)



function primeo(no){
    for(i=2 ; i<no; i++){
       if(no%i==0){
         return 'not prime no'
  }
  
  }
  return 'prime'
  
  }
  let rw2=primeo(5)
  console.log(rw2)



var arr1 = [1, 2, 3, 4, 7, 7, 9];
let uniqueelement=[]
  arr1.forEach(element=>{
   if(uniqueelement.includes(element)===false){
     uniqueelement.push(element)
  }
  })
  console.log(uniqueelement);

  

arrowfunctin=()=>{
    console.log('aarrow func');
}
// arrowfunctin()

// let youaray=[1,2]
// let[n1,n2=90,n3=90]=youaray
// console.log(n1,n2,n3);


// let value=true
// let promise1=new Promise((resolve,reject)=>{
//   if(value){
//   resolve('this is the resolve')
// }
// else{
//  reject("this is the reject")
// }});
// promise1
// .then(element=> console.log("this is ht eelement",element))
// .catch(failure=> console.log('this is the falure' ,failure))
// .finally(()=>console.log('this is the default stme'))





