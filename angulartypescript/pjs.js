let array=[1,2,[2,3],[1,2,[3,[1,3],4]]]
let t=array.flat(3)
console.log(t);


function capitalizeFirstLetter(str) {

//77 converting first letter to uppercase 
const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

return capitalized;

}

// take input

// const  string=prompt('Enter a string: ')

const   result= capitalizeFirstLetter('arpita');

console.log(result);
let re = 'r';
let str = 'hi There! How are you?';
let index = str.search(re);
console.log(index);
//OUTPUT: 3

function leapyr(yr){
if (yr%100==0 && yr%400==0 || yr%100!=0 && yr%4==0) {
    console.log("leap yr");
}
else{
    console.log('not ');
}
}
leapyr(2000)

function printInvertedPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
      let spaces = ' '.repeat(rows - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
//   const numberOfRows = 5; // You can change this value to adjust the size of the pyramid
//   printInvertedPyramid(numberOfRows);

  
  function printStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let stars = '';
  
      for (let j = 1; j <= i; j++) {
        stars += '* ';
      }
  
      console.log(stars);
    }
  }
  
  const numberOfRows = 5; // You can change this value to adjust the size of the triangle
  printStarPattern(numberOfRows);
  