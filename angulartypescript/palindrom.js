console.log('next anss ==');
let x = 10;
let y = x++
let z = ++x
console.log(x,y,z); //12  10  12
console.log('----------------------------------------------------------------------------------------------------');
console.log(0.1 + 0.2 == 0.3);//false
console.log(3>2>1);//false
console.log(('b'+'a'+ + 'a' + 'a').toLowerCase()); 
let q = 10;
let t = q--
let  j= --q
console.log(q,t,j); // 8 10 8
var aa= 10
var bb = aa--
var cc =++ aa
console.log(aa,bb,cc); // 10 10 10
var aa= 10
var bb = aa++
var cc =aa++
console.log(aa,bb,cc); // 12 10 11