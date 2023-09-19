"use strict";

let nbr1 = 5;
let nbr2 = 8;
let nbr3 = "5";

if(nbr1 == nbr3){
    alert("Egalité");
}//l'alerte va se lancer 

if(nbr1 === nbr3){
    alert("Egalité bis");
}// l'alerte ne vas pas s'afficher
else{
    alert("Je suis différent");
}

if(nbr1 == 8){
    alert("Je suis le 8");
}
else if(nbr1 == 4){
    alert("Je suis le 4");
}
else{
    alert("Je suis un autre nombre");
}

if (nbr1 == 5 && nbr2 == 8){
    alert("Je suis trop fort");
} // le et = &&
else {
    alert("NOOB");
}

if (nbr1 == 5 || nbr2 == 5){
    alert("Je suis trop fort");
} // le ou = ||
else {
    alert("NOOB");
}

switch(nbr1){
    case 1:
        alert("je suis le chiffre 1");
        break; //quitte le switch
    case 2:
        alert("je suis le chiffre 2");
        break;
    case 3:
        alert("je suis le chiffre 3");
        break;
    case 4:
        alert("je suis le chiffre 4");
        break;
    case 5:
        alert("je suis le chiffre 5");
        break;
    default:
        alert("je suis un autre chiffre")        
}
