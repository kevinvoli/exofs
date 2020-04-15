const input = document.querySelectorAll('input')
const button =document.querySelector('button')
const alert = document.querySelector('div')
button.addEventListener('click',()=>{

    input.forEach(element => {
        console.log(element.value)
        if(element.value===""){
            element.classList.add('error')
            alert.classList.remove('none')
        }
    });
})