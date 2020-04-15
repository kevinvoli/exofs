let btn =document.querySelector('button')
let display = document.querySelector('.display')
btn.addEventListener('click',()=>{
   let write =prompt('please enter a string  who contain ""')
   if(! write.includes('""')){
       let nwrite =prompt('the string not contain "" !!! please retry')
       if(!nwrite.includes('""')){
           alert('your word must contain : "" ')
       }else{
        display.append('<<' + nwrite + '>>')
       }
   }
   else{
       display.append('<<' + write + '>>')
   }
})