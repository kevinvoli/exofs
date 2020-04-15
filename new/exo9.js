let n1 = parseInt(prompt('Enter the first number'))
let n2 = parseInt(prompt('Enter the second number'))
let n3 =parseInt(prompt('Enter a last number'))

let ret =typeof(n1)==isNaN|| typeof(n2)==isNaN ||typeof(n3)!==isNaN  ?true:false
if(ret===true){
    if(n1==n2&& n2==n3){
        alert('les trois nombres sont identiques')
    }else if(n1==n2 && n2!=n3 || n1==n3 && n3!=n2 || n2==n3&& n3!=n1){
         alert('seulement deux nombres sont identiques')
    }
    else{
       alert('les trois nombre sont differentes') 
    }
}