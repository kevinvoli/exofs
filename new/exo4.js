let input = document.querySelector('input')
let submit  =document.querySelector('.submit')
let draw = document.querySelector('.draw')
let tab =[]
let val 
function sort(){
     nbr = Math.floor(Math.random()*(tab.length))
    console.log(tab[nbr])
}
submit.addEventListener('click',function(){
 tab.push(input.value)
 console.log(tab)
 input.value =" "
})
draw.addEventListener('click',function(){
   sort()
})