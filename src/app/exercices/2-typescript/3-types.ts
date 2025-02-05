export {}

/**
 *
 */
type Person = {
  firstName: string;
  lastName: string;
  age?: number; // Propriété optionnelle
};

const user1: Person = {
  firstName: 'John',
  lastName: 'Doe',
};

/**
 * On peut faire de l'héritage aussi
 */
type Developer = Person & {
  favoriteLanguage: string;
  isJavascriptHater: boolean;
};

/**
 * On peut faire des combinaisons de types
 */
type User = Person | Developer;
