function paalindrom(str:string){
for (let index = str.length-1; index >=0; index--) {
    const element:string = str.charAt(index);
    let store:Array<string>=[]
    store.push(element)
    if (str==store) {
        console.log("paalindrom");
        
    }
}
}
paalindrom("mam")
