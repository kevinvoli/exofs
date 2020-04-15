const express = require('express');
const multer = require('multer');
const ejs = require('ejs')

//sesie de stocage

const storage =

//initialisation des variable

const app= express();
const port = 8080;

//ejs

app.set('view engine','ejs');

//dossier public

app.use('upload',express.static('public'))
app.use('/styles',express.static('public'))
app.use(express.static('views'));

app.get('/',(req,res)=>{
   res.render('index');
})


app.listen(port,()=>{
    console.log('le serveur a été lance sur le port',port)
}) 