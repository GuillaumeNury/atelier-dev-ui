export {};

interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Propriété optionnelle
}

const user1: Person = {
  firstName: 'John',
  lastName: 'Doe',
};

const user2: Person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 42,
};

const user3: Person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 42,
};

function greet(person: Person) {
  return `Hello, my name is ${person.firstName} ${person.lastName} (${person.age} years old).`;
}

greet(user1);

const lol = {
  firstName: 'Jane',
  lastName: 'Doe',
};

greet(lol);

/**
 * On peut faire de l'héritage
 */
interface Developer extends Person {
  favoriteLanguage: string;
  isJavascriptHater: boolean;
}
