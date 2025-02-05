// @ts-nocheck
export {};

/**
 * On assigne une valeur à une variable/constante
 */
let firstname = 'Alexandre';
const age = 25;

/**
 * On ne peut modifier que les variables (let) et non les constantes (const)
 */
firstname = 'Alex'; // Ça marche
age = 26; // Ça ne marche pas

/**
 * Il existe également le mot-clé var qui est obsolète.
 * La portée de var est plus difficile à comprendre que celle de let et const.
 */
var legacy = true;

/**
 * Portée des variables : on ne peut pas accéder à une variable déclarée dans un bloc depuis l'extérieur de ce bloc.
 */
const variableRacine = 1;

if (Math.random() > 0.5) {
  const variableBloc = 2;
  console.log(variableBloc); // Ça marche
  console.log(variableRacine); // Ça marche
} else {
  console.log(variableBloc); // Ça ne marche pas
  console.log(variableRacine); // Ça marche
}

function doStuff() {
  const variableFonction = 3;
  console.log(variableFonction); // Ça marche
  console.log(variableRacine); // Ça marche
  console.log(variableBloc); // Ça ne marche pas
}

/**
 * Les variables peuvent être déclarées sans valeur
 */
let variableSansValeur; // Ça marche
const constanteSansValeur; // Ça ne marche pas

variableSansValeur = 1; // Ça marche
constanteSansValeur = 2; // Ça ne marche pas
