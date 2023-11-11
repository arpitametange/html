// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// } 
// console.log(string);

// function print(rows){

// for (let index = 1; index <=rows; index++) {
//     // console.log(index);
//    let star=""
//     for (let i = 1; i <=index; i++) {
   
//         star+='* '

//     };
//     console.log(star);
// }

// }
// print(5)


let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

console.log(0.1 + 0.2 )


