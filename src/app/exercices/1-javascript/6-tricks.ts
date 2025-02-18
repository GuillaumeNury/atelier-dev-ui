export {};

/**
 * Générer un tableau de 50 éléments contenant des nombres aléatoires entre 0 et 100
 */
const users = new Array(50) // Crée un tableau de 50 éléments
  .fill(0) // Remplit le tableau de 0
  .map((_, index) => {
    const age = Math.floor(Math.random() * 101); // Math.random() génère un nombre entre 0 et 1, Math.floor() arrondit à l'entier inférieur
    return { name: `User ${index}`, age };
  });

/**
 * Spread operator (Array)
 */
const even = [2, 4, 6];
const odd = [1, 3, 5];
const numbers1 = [0, ...even, ...odd]; // [0, 2, 4, 6, 1, 3, 5]
const numbers2 = [...odd, ...even]; // [1, 3, 5, 2, 4, 6]

/**
 * Spread operator (Array)
 */
const user = { name: 'John', age: 42 };
const user2 = { ...user, age: 43 }; // { name: 'John', age: 43 }
