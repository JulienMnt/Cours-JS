"use strict";

let tableaufruit = ["Fraise", "Mangue", "Goyave"];
console.log(tableaufruit);
console.log(tableaufruit.length); //Taille du tableau
console.log(tableaufruit[0]);
tableaufruit[1]= "Framboise";
tableaufruit.push("Cerise");

for(let i = 0; i < tableaufruit.length ; i++){
    console.log(tableaufruit[i]);
}
