// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date();
//   console.log(date.getSeconds());
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hour = date.getHours();

//Ajouter l'heure , minite , seconde  dans des varaiables
const degre_rotation = 360 / 60; // degre de rotation de minute et de seconds;
const degre_rotation_hour = 360 / 12; // degre de rotation de hours

function demarrerLaMontre() {
  if (seconds == 9007199254740990) {
    seconds %= 60;
  }
  seconds++;
  AIGUILLESEC.setAttribute(
    "transform",
    "rotate(" + seconds * degre_rotation + ")"
  );
  AIGUILLEMIN.setAttribute(
    "transform",
    "rotate(" + (minutes + seconds / 60) * degre_rotation + ")"
  );
  AIGUILLEHR.setAttribute(
    "transform",
    "rotate(" + (hour + seconds / 3600) * degre_rotation_hour + ")"
  );
  console.log(hour + minutes / 60 + seconds / 3600);
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
