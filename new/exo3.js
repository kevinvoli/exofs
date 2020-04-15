
const letters = ['a','A','b','c','C','d','D']
function stringFirst(arg){
var found = letters.find(function(element) {
 return element ===arg[0]
});
return found
}
// console.log(stringFirst("Dssan"))
function isOnly(arg){
    let tab =[]
    for(i in arg){
        if(arg[i]==='@'){
            tab.push(arg[i])
        }
    }
    let ret = tab.length ===1?true :false
    return ret 
}
//console.log(isOnly('nicolas@'))
function replaceNumber(arg){
for(let i=0; i <=arg.length;i++){
    if(arg[i]!=isNaN){
    arg.splice(arg.indexOf(i),1,'*')
    }
} 
console.log(arg)
}
//replaceNumber([1,2,4,5,'nicolas',9,'4','7',10])