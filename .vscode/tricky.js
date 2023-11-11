var inputArr =[1,2,2,4,5,4,7,8,7,3,6];
//unique element from arrray
let method=inputArr.filter((element,index)=>{
    return inputArr.indexOf(element)==index;
})
console.log(`//unique element from arrray
${method}`);

console.log(inputArr[0]);


//WITH USING SORT METHOD ==PRINT HIGHEST NUMBER
let srot=inputArr.sort((a,b)=>{
  return  a>b?1:-1
})
console.log('WITH USING SORT METHOD ==PRINT HIGHEST NUMBER',srot[srot.length-1]);


//SORTING THE HIGHEST NO WITHOUT USING SORT METHOD
let highestnumber=inputArr[0]
for (let index = 1; index < inputArr.length; index++) {
    if (inputArr[index]>highestnumber) {
        highestnumber=inputArr[index]
        
    }
    
}
console.log('//SORTING THE HIGHEST Nu WITHOUT USING SORT METHOD',highestnumber);


//removing dublicates from array without using set
var inputArr =[1,21,12,12,12,14,12,5,4,7,8,7,3,6];
let empty=[]
inputArr.forEach(element=>{
    if (empty.includes(element)===false) {
        empty.push(element)
    }
})
console.log('//removing dublicates from array without using set'
,empty);

//removing dublicates from array using ***Set***
let newunique=[...new Set(inputArr)]
console.log('removing duplicate using set',newunique);


//merged two array
let a=[1,2,4]
let b=[5,6,7]
///USING SPEAD OPERATOR
let newmergedone=[...a,...b]
console.log('merged using spread operator',newmergedone);

//USING CONCATE METHOD
let usingconcate=a.concat(b)
console.log('merged using concate',usingconcate);

//USING CUSTOM METHOD
for (let index = 0; index < b.length; index++) {
a.push(b[index])    
}
console.log('//USING CUSTOM METHOD mereged array',a);

// ******REVERSE THE ARRAY*****
var inputArr =[1,2,3,4,5,6,7,8,9];
let emptyt=[]
for (let index = inputArr.length-1; index >=0 ; index--) {
    emptyt.push(inputArr[index])
}
console.log('REVERSE THE ARRAY==',emptyt);


// ********SUM OF ARRAY*******
var inputArr =[1,2,3,4,5,6,7,8,9];

//USING REDUCE METHOD
let sumofall=inputArr.reduce((firstelement,newxtvalue)=>{
return firstelement+newxtvalue
})
console.log(sumofall);

//USING FOR LOOP
let s=0
for (let index = 0; index < inputArr.length; index++) {
    s=s+inputArr[index]  
}
console.log(s);

//sum of two array 
// There are two arrays with individual values, write a JavaScript program to compute the sum of each
// individual index value from the given arrays.
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]


// let array=[1,2,3,4,5,6,7,8,9]
let array2=[11,22,33,44,55]
result=[]
let maxlength=Math.max(array.length, array2.length)
for (let index = 0; index < maxlength; index++) {
    let sum=(array[index] || 0)+ (array2[index] || 0)
    result.push(sum)
    
}
console.log(result);


let str='TCS the Indian IT Giant Company'
let vowels='aeiouAEIOU'
let count=0
let storeuniqueelement=[]
for (let index = 0; index < str.length; index++) {
    const ALLstrElements = str.charAt(index)
    if (vowels.includes(ALLstrElements)===true && storeuniqueelement.includes(ALLstrElements)===false) {
        storeuniqueelement=storeuniqueelement+ALLstrElements
        count++
        
    }
    
}
console.log('unique vowels count',count);





function arraySort(arr)
{ 
    for (let i = 0; i < arr.length; i++) {
     for (let j = i+1;j < arr.length; j++) {
         if(arr[i] > arr[j])
         {
            let temp=0;
            temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
         }
     }    
    }
    return arr;
}

let result1 = arraySort([1,25,345,23,34,78,20]);
console.log("sorted array", result1);
console.log('second highest number: ', result1[result1.length-2]);


/************************************************************************************************************* */


//WAP to swap two variables a=100 and b=200 without using third variable

let m=10
let n=11
m=m+n
n=m-n
m=m-n
console.log('swap two variable',m,n);



const array = [1, 6, 5, 3, 11, 23, 4 ,6]
let store=[]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index%2!=0) {
        store.push(element)
    }
}
console.log(store);

let splicee=array.splice(3,1,12)
console.log(array);



for (let index = 2; index<16 ; index=index+2) {
    console.log(index);; 
}

//another method
var evenNumbers = [];
for (var i = 2; evenNumbers.length < 7; i += 2) {
  evenNumbers.push(i);
}

console.log(evenNumbers);


function name1(num) {
    for (let index = 2; index < num; index++) {
      if (num % index==0) {
      return ` is not a prime number`
      
    }    
    }
    return `${num}  prime no`;
    }
  var r=name1(11)
  console.log(r);

console.log("***");
var num=6
    for (let index = 2; index < num; index++) {
      if (num % index==0) {
      console.log(`${num} is not a prime number`);
       break 
    }  
    else{
        console.log(`${num}  prime no`); 
           break
    }  
    }
//   console.log(num);

  

let arrayp=[]
function name(arg,arg1) {
  let count1=0;
for (let number=arg; count1<arg1; number++){
let isprime=true;
for (let index = 2; index <number; index++) {
    if (number%index==0) {
        isprime=false;
        break;
    }  
}
if (isprime) {
    arrayp.push(number)
    count1=count1+1;
}
}
console.log(arrayp);
}
name(2,10)


console.error(`----------------------------------Factorial of Number------------------------------------`);
function factorialOfNumber(num) {
    let factorial=1
    for (let index = num; index >=1; index--) { //6*5*4*3*2*1
      factorial=factorial*index
}
if (num==null ||num== undefined || num == 0) {
return `is invaild please give valid number`
    
}


    return factorial
}
var result = factorialOfNumber(6)
console.log(`Factorial of 6 is ${result}`);
var result = factorialOfNumber(3)

///currying
let currying=(a)=>{
    return (b)=>{
         return (c)=>{
              return a+b+c
         }
    }
}
let t=currying(2)(2)(2)
console.log(t);


let name={
    f:'arpita',
    l:'metnage',
    
}
//we can do like this too
let show=function(){
    console.log(this.f,this.l);
}

let name2={
    f:'ankita',
    l:'sharma'
}
show.call(name2)  //call method

/////////////////////
let objee={
    a:'arpita',
    b:'ankita00'
}
let secondmethod=function(hometown,state){
console.log(this.a,this.b,hometown,state);
}
secondmethod.call(objee,'delhi','maharsthra')  //call method ==here we directly pass in comma separated


//the difference btw call and apply method is the how we pass the argument == it is in array

secondmethod.apply(objee,['mumbai','delhi'])


//bind method bind the object with function and returns us the copy of the object, also not called directly
let bindmethod=secondmethod.bind(objee,'parel','mahareashtra')
// console.log(bindmethod); //gives the funciton
bindmethod()



async function getdata(){
    let promise=new Promise((resolve,reject)=>{
         setTimeout(() => {
              resolve('this is the resolve')

         }, 2000);
    })
    let s=await promise
    console.log(s);
}

getdata()
