const fs = require('fs');
let video= './video.mp4';
let fichier= 'fichier.mp4';


let coool= fs.stat(fichier,(err,stat)=>{
    console.log(stat)
    let tempsDjaz= stat.mtimeMs
    let tailDjaz = stat.size
    let tails =stat.ino
    console.log(stat)
    let lecture= fs.createReadStream(video,{
        start:0,
         end:2901153,	
})
let ecriture= fs.createWriteStream(video);

lecture.pipe(ecriture);
  
})







// let lecture= fs.createReadStream(video,{
// start:0,
// end: 2901153,	
// })
// let ecriture= fs.createWriteStream(fichier);

// lecture.pipe(ecriture);
















// const fs= require('fs');
// const readline= require('readline');
// let tableau=[
// 	'kevin\n',
// 	'voli\n',
// 	'cool\n',
// 	'man\n',
// 	'bonne\n'
// ];
// let autretableau=[];
// let debut= 'kevin' ;
// let fin=1;
// fs.readFile('aurevoir.txt',(err)=>{
// 	err?console.log(err):fs.writeFile('aurevoir.txt',tableau,'UTF8',(err)=>{
// 		err?console.log(err): console.log(('trop cool'))
// 	}) ;
// })

// let retour= readline.createInterface({
// 	input:fs.createReadStream('aurevoir.txt')
// })
// retour.on('line',(line)=>{
// 	autretableau.push(line+'\n')
// })

// retour.on('close',(err)=>{
// 	autretableau.splice(autretableau.indexOf(debut),fin)
// })


