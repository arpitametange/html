//compile-time polymerization
function double(str:string);
function double(str:number);
function double(str:string)

function double(str:any){
if(typeof str==="string"){
    console.log(str+str);
    
}
else if(typeof str==="number"){
    console.log(str+3);  
}
}
double("arpota ")
double(12)
double("mmetnage ")

