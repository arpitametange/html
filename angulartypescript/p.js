function countchr(str,letter){
   let count=0
for (let index = 0; index < str.length; index++) {
   if (str.charAt(index).includes(letter)) {
      count++
   }
   
}
console.log(count);
}
countchr('arpita','r')

let array=[1,2,[3,3,[2,3,[1,3],4]],[3,4]]
let t=array.flat(3)
console.log(t);