let tab =[-2,1,4]
const button = document.querySelector('button')
function add(x){
    return x+2
}
button.addEventListener('click',()=>{
    alert(tab[0]=add(4))
    alert(tab[tab.length - 1]=add(4))
})
