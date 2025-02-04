// @ts-nocheck
export {};

/**
 * Deux manières de déclarer une fonction.
 */
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

add(1, 2); // 3
multiply(2, 3); // 6
add(1, add(2, 3)); // 6
