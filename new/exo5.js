let Etudiant = function(nom,prenom,matricule,notes){
    this.nom = nom
    this.prenom =prenom,
    this.matricule =matricule,
    this.notes = notes
    this.moyenne =function(){
        let total=0;
        let anglais =this.notes.anglais
        let math =this.notes.mathematiques
        let fran = this.notes.francais
        let coeff = anglais.length+math.length
            for(i in anglais){
                total += anglais[i]
            }
            for(i in math){
                total+=math[i]
            }
            for(i in fran){
                total+=fran[i]
            }
        return total/coeff
    }
}
const Nicolas = new Etudiant('assan','nicolas','88482118',{anglais:[17,11,10],mathematiques:[06,07,10],francais:[12,04,08]})
const MarieAnge = new Etudiant('yao','ange','89483628,',{anglais:[20,15,12],mathematiques:[11,12,08]})
console.log(Nicolas.moyenne())
console.log(MarieAnge.moyenne())
