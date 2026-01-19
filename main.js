/* JavaScript faite par Eline Tronelle pour les deux page html : index.html / contact.html

Last update 2026/01/19*/


/* --------------------------BUTTON MUSIC (in Nav) -----------------------------------*/

/* DEFINIR SES VARIABLES */

const btnaudio = document.getElementById("playBtn");
const texteInitialBtnAudio = btnaudio.textContent       //save le message de base dans le html

const music = document.getElementById("music")

/* debeug : console.log(btnaudio); */

/* EVENT */

btnaudio.addEventListener("click", function() {

    if (music.paused) {                                // Verifier si la music est On ou pas
        /* console.log("debug-music") ;  */ 
        //Si la music est en pause :                 
        music.play();                                  //Demarrer la music
        btnaudio.textContent = "ON ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧";  //Changer le texte dans le boutton audio

    } else {
        //Si la music est ON :
        music.pause();
        btnaudio.textContent = texteInitialBtnAudio ;
    }
});


/* ------------------------------BUTTON FUN MODE (spin spin round round) ---------------------------*/

/* DEFINIR SES VARIABLES */

const btnSpin = document.getElementById("spinBtn") ;
const texteInitialBtnSpin = btnSpin.textContent

const spinClass = document.querySelectorAll(".Potentialfun") ;

let funActive = false               //Variable bool : est ce que sa tourne ou pas?


/* EVENT */

btnSpin.addEventListener("click", function() {
    if (funActive){                                       //Si sa tourne deja
       /*  console.log("debug") */
        spinClass.forEach(function(el){                   //
            el.classList.remove('fun') ;
        })
        funActive = false
        btnSpin.textContent = texteInitialBtnSpin ;
    } else {
        console.log("YUES") ;
        spinClass.forEach(function(el){
            el.classList.add('fun') ;
        })
        funActive = true
        btnSpin.textContent = "Fun mode A C T I V E";

    }

});



/* -------------------------------PORTFOLIO INKTOBER ------------------------------------*/

/* DEFINIR SES VARIABLES */

const inktober = document.querySelectorAll(".image-portfolio")

const EOG = document.querySelectorAll(".image-portfolio-game")

/* INCREMENTER AUTOMATIQUEMENT - inktober */

inktober.forEach((img, i) => {      // Pour chaque image de mon array (list)
    img.style.left = `${i * 2}vw`;  /* shift 2vw, then 4 vw nb img* */
    img.style.zIndex = i + 1;       /* Incrementation of picture, pile style */
});



/* INCREMENTER AUTOMATIQUEMENT - jeux video */

EOG.forEach((img, i) => {
    img.style.left = `${i * 4}vw`;  
    img.style.zIndex = i + 1;       
});





/* ---------------------------------------FORMULAIRE -------------------------------------*/

/* DEFINIR SES VARIABLES */

const form = document.querySelector("form")

const nameInput = document.querySelector("#nameGive")                   //Input field pour le Prénom
const nameError = document.querySelector("#first-name-error")           //Message d'erreur caché dans la page html

const familyInput = document.querySelector("#familyGive")
const familyError = document.querySelector("#family-error")

const messageInput = document.querySelector("#messageGive")
const messageError = document.querySelector('#messageError')

const validationMessage = document.querySelector('#validation')         //Message de validation caché dans la page html    

let checkingAnswers = 0                                                 // Compteure de bonne réponse

/* EVENT */

form.addEventListener("submit", function(event) {       // ecouter l'event submitt dans le form
    
    event.preventDefault()                              //ne pas recgarger la page si on click sur submitt

    if (nameInput.value.length === 0) {                    // verifer le contenu de l'input Name n'est pas vide
        //Si le nom est vide, alors
        nameError.classList.remove("invis")
        //revélé le message d'erreur                            
    } else {
        //si le nom n'estb PAS vide alors
        nameError.classList.add("invis")                // afficher un message d'erreur
        console.log("Your name is:", nameInput.value);  // ce qu'on a envoyer dans le name input a chaque fois qu'on clique sur envoyer
        checkingAnswers += 1                            // var checkAnswer + 1, pour le message de validation!
    }


    if (familyInput.value.length === 0) {               // verifer le contenu de l'input nom de famille n'est pas vide
        familyError.classList.remove("invis")
    } else {
        familyError.classList.add("invis")
        console.log("You family name is:", familyInput.value);
        checkingAnswers += 1
    }

    if (messageInput.value.length <= 9) {               // verifer le message fait au moin 10 character
        messageError.classList.remove("invis")
    } else {
        messageError.classList.add("invis")
        console.log("Your message is :", messageInput.value);
        checkingAnswers += 1
    }

    if (checkingAnswers === 3) {
        // Si nos trois condition sont bonne, alors checkingAnswers =3, 
       /*  console.log("works") */
        validationMessage.classList.remove("invis")     // afficher le message de validation
    }

    form.reset()                                           // Reset le formulaire quelque soit le résultat
})




