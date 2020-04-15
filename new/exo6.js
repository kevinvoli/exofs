function transform(string){
    let radical =""
    let newEnd = "eur"
   
    if(string!=="aller"&& string.slice(string.length -2, string.length)==="er"){
        radical=string.slice(0, string.length - 2)
        console.log(radical+newEnd)
    }else{
        console.log('undifined verb')
    }
}
transform('chanter')