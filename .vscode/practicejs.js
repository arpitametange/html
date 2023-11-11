
let str='this is the sentence'
let reverse=str.split('').reverse().join('')
let t=reverse.split(' ').reverse().join(' ')
console.log(reverse);
console.log(t);

let chr='madam'
for (let index = 0; index < chr.length; index++) {
    let chr1=chr[index]
    let count=0
    for (let i = 0; i < chr.length; i++) {
        // const element = chr[i];
        if (chr1===chr[i]) {
            count++
        }
        
    }
    console.log(chr1,count);
}


function occurenes(str,letter){
    let count=0
    for (let index = 0; index < str.length; index++) {
        const element = str.charAt(index);
        if (element==letter) {
            count+=1
        }
        
    }
    return count
    }

    let occ=occurenes('arpitaa','a')
    console.log(occ);


    
