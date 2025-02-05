export {};

/**
 * Le JS est un code typescript valide
 * Il vient restreindre le JS en ajoutant des types et en interdisant certaines pratiques
 * Il vient détecter des erreurs lors de la compilation (on évite de les avoir au runtime)
 * À la fin, on génère du JS.
 */

/**
 * L'idée va être d'indiquer le type des variables, des paramètres et des retours de fonctions.
 */
let isDone: boolean = false;
let age: number = 30;
let name: string = 'Alice';

function add(a: number, b: number): number {
  return a + b;
}

/**
 * Dans les cas simples, TypeScript peut deviner le type de la variable.
 * On parle d'inférence de type.
 * (Mettre son curseur sur la variable pour voir le type)
 */
let isDone2 = false;
let age2 = 30;
let name2 = 'Alice';

function add2(a: number, b: number): number {
  return a + b;
}
