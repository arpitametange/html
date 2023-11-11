let array=[7,12,45,[1,2,[4,5,6],4],23,5]

const flatten3DArray = (arr) => {
    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array.');
    }
  
    const result = [];
  
    const recursiveFlatten = (arr) => {
      for (const element of arr) {
        if (Array.isArray(element)) {
          recursiveFlatten(element);
        } else {
          result.push(element);
        }
      }
    };
  
    recursiveFlatten(arr);
    return result;
  };
  
const threeDArray = [ 1,2,3,4,[56,5,[1,2,3],4] ];
const flattenedArray = threeDArray.flat()
console.log(flattenedArray);
console.log(threeDArray); 


function palindrom(str){
  let splitee=str.replace(/\s/g).toLowerCase()
  return splitee===splitee.split('').reverse().join('')
}
if (palindrom('madam')) {
  console.log('its palindrom');
  
}
else{
  console.log('not');
}




function pa(chr){
let w=chr.replace(/\s/g).toLowerCase()
return w===w.split('').reverse().join("")
}
if (pa('madam')) {
  console.log('palindrom');
}
else{
  console.log('not');
}



function program(str,word){
  let count=0
for (let index = 0; index < str.length; index++) {
  const element = str.charAt(index);
  if (element===word) {
    count+=1
  }
  
}
return count
}
let t=program('madam','d')
console.log(t);








