//Commentaire
"use strict"; //Ne laisse pas passer les erreurs
var prenom = "Julien"; // variable type string
console.log(prenom); //Julien
//prenom = "bob";
console.log(prenom); //bob
console.log(typeof prenom) // STRING

let nom; // let mieux que var
nom = "Menet";
let age;
age=22; //variable de type number

//Exercice (trouver age avec annee de naisance)

let anactuel = 2023;
let annaissance;
annaissance = 2004;
age = anactuel - annaissance;
console.log(age);
let ouvert  = true; // variable bool

//concatenation
console.log("Bonjour , je suis " +prenom +" " +nom + " et j'ai " +age +" ans");

let nbrEntier = "15";
let nbrDecimal = "17.3";
console.log(typeof nbrEntier); // string
nbrEntier = parseInt(nbrEntier); //nbrEntier etait "15" et deviens 15
nbrDecimal = parseFloat(nbrDecimal); // nbrDecimal etait "17.3" et deviens 17.3
