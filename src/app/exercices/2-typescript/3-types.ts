export {};

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
interface Cat {
  name: string;
  meow: () => void;
}

interface Dog {
  name: string;
  bark: () => void;
}

type Animal = Cat | Dog;

function makeSound(animal: Animal) {
  console.log(animal.name);

  if ('meow' in animal) {
    animal.meow();
  } else {
    animal.bark();
  }
}

/**
 * Generics
 */

class Box<T extends { name: string }> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }
}

const catBox = new Box<Cat>({
  name: 'Kitty',
  meow: () => console.log('Meow'),
});

const dogBox = new Box<Dog>({
  name: 'Doggy',
  bark: () => console.log('Bark'),
});

catBox.item.meow();
dogBox.item.bark();
