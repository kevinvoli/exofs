const mseconds = document.querySelector('.mseconds')
const seconds =document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')
const stop = document.querySelector('.stop')
let ms =0;let sc =0;let mt =0;let hr =0
let isStop =true
let chrono = function(){
       setInterval(()=>{
        ms++
        mseconds.innerHTML =ms
        if(ms===100){
            ms=0
        }
    },1)
    setInterval(()=>{
         sc++
            seconds.innerHTML =sc
            if(sc===59){
            sc=0
            mt +=1
            minutes.innerHTML =mt
            }
            if(mt===59){
                mt=0
                hr+=1
                hours.innerHTML =hr
            }   
    },1000)        
}
start.addEventListener('click',()=>{
if(isStop===true){
chrono()
}
})
reset.addEventListener('click',()=>{
    location.reload()
})
stop.addEventListener('click',()=>{
})

