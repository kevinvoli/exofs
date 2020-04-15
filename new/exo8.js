function alt(){
    const cart = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    var couleur ="#"
    var nbr = 0;
        for(let i=0; i< 6;i++){
            nbr = Math.floor(Math.random()*(15-0+1))+0
            couleur =couleur+cart[nbr]
        }
        console.log(couleur)
        return couleur
    }
function reload(){
    location.reload()
}

let recup 
const img =['img1','img2','img3','img4']
const body = document.querySelector('.body')
const button = document.querySelector('.button')
const image =document.querySelector('.image')

body.addEventListener('click',()=>{
    document.body.style.backgroundColor=alt()
})
button.addEventListener('click',()=>{
    button.style.backgroundColor =alt()
})
image.addEventListener('mouseenter',()=>{
    let i =  Math.floor(Math.random()*(img.length))
    recup =i
   image.classList.add(img[i])
})
image.addEventListener('mouseleave',()=>{
   location.reload()
})