/* console.log("Hello, World!")

let money = 100

console.log(money)
// commentaireeee 

money -= 10
/* jqshd */
/* 
console.log(money)

let amour = 1

let heur = 10

if (amour === 1) {
    console.log("ding ding ding ${heur*2} ")

} else if (amour === 2) { 
    
    if(heur <= 10) {
        console.log("wawawawa")

    } else {
    console.log("jsdghkks")
    }

} else {
    console.log("SMASHHHH")

}

/* && || */ /*



if (heur>=8 && heur <= 19) {
    console.log("magasin ouvert")

}else {
    console.log("fermer")

}


*/

/*

const name = "Arle"

console.log( `fddsf ${name} n'est ce pas?`)

let ceciEstVariable = prompt("enter name")

console.log(ceciEstVariable)

const code = "parfies"
const userImput = prompt("taper le code")

if (userImput == code){
    //le code est bon
    console.log ("gg")
}  else {
    //code mauvaus, C COMME sa qu'on ECRIT des com!
    console.log ("")
}


function sayHello(){
    console.log("to a new status quo....");
}

function pool(choix1, choix2) {
    let rep = prompt(`Vous preferer.... ${choix1} ou plutot ${choix2} ?`)
    return rep
}

let choix1 = "Undertale"
let choix2 = "Deltarune"
console.log(pool(choix1, choix2))

const pol = (a,b) => {
    let rep = prompt(`Vous preferer.... ${choix1} ou plutot ${choix2} ?`)
    return rep
}




for(let i = 0; i < 10; i++) {
    console.log(i) ;
}



let compter = 0
let i = 0

while (i< 10) {
    compter += 1 ;
    i++
}

console.log (compter)

function operation(a,b,type) {
    if (type == "-") {
        return a - b
    } else {
        return a + b
    }
}


let ship = ['odyssey', 'EggYolk', 'voguemerry', 'Blackperle', 'tax']

for(let i = 0; i < ship.length; i++) {
    console.log(ship[i])
}

ship.forEach(function (fruit) { // = for bateau in ship!
    if(fruit === 'voguemerry') {
         return 0
    }
    console.log(fruit)
})


let student = {
    name : "Parrot",
    favfood : "cookies",
    city : "Minecraft"
}

console.log(student.city)


// VIve les classe!!!!
class Guerrier {
    constructor(attack,defense){
        this.attack = attack;
        this.defense = defense;
    }

    getAttack() {
        console.log(this.attack)
    }
}
*/


// JS POUR LE WEB 

/* const name = document.querySelector("h1") // prend QUE le premier h1

console.log(name);

const m = document.querySelector(".cards-container div.card:nth-child(2) p") // prende QUE le p de la deuxieme card
console.log(m);

console.log(document.getElementById("#card4-text"))

const cards = document.querySelectorAll(".card") //selectionnez toute les class card

console.log(cards)

cards.forEach(function(card) {
    //console.log(card)
    card.querySelector("p").innerText = "hi"
})

 */


/* function sayHi(){
    console.log('Hello')
}

 */

const image = document.querySelector("img")

image.addEventListener("click", function () {
    image.classList.toggle("border-yellow")
})

const ici = document.querySelector("") // Ici, quand je suis sur une page precise, c en vert plus foncer pour indiquer a l'utilisateur ou il se trouve!

//D'autre exemple de truc fun a faire sur le fichier initiation javascript


// 1er etape recupere l'event dont on a besoin.

const form = document.querySelector("form")

const nameInput = document.querySelector("#nameGive")
const nameError = document.querySelector("#nameError")

// ecouter l'event submitt dnas le form

form.addEventListener("submit", function(){
    //eut prendre en argument un event qui vient de javascript
    
    event.preventDefault() //ne pas recgarger la page si on click sur submitt
    // verifer le contenu de l'input est pas vide

    console.log(nameInput.value) // ce qu'on a envoyer dans le name input a chaque fois qu'on clique sur envoyer
    if (nameInput.value == ""){
        // afficher un message d'erreur
        nameError.classList.remove(".invis")

    }
}) 