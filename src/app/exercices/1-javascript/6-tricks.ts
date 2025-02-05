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
