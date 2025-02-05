// @ts-nocheck
// prettier-ignore
export {};

/**
 * Il existe plusieurs types de données en JavaScript.
 */
let string = 'Hello, World!'; // Une chaîne de caractères
let number = 42; // Un nombre
let boolean = true; // Un booléen
let array = [1, 2, 3]; // Un tableau
let object = { name: 'John', age: 42 }; // Un objet

/**
 * On peut réassigner une valeur à une variable, même si elle est de type différent.
 * (PS: TypeScript l'interdit)
 */
number = 'quarante-deux';

/**
 * On peut évidemment combiner les types de données.
 */
const userCollection = {
  count: 2,
  items: [
    {
      name: 'John',
      age: 42,
      hobbies: ['reading', 'swimming'],
      hasBlueEyes: true,
    },
    {
      name: 'Jane',
      age: 35,
      hobbies: ['running', 'climbing'],
      hasBlueEyes: false,
    },
  ],
};

/**
 * On peut accéder aux propriétés d'un objet de deux manières différentes.
 */
const user = userCollection.items[0];
const userName = user.name;
const property = 'name';
const userName2 = user[property];

/**
 * Deux façon de représenter une absence de valeur.
 */
let nothing1 = null;
let nothing2 = undefined;

/**
 * On peut faire des classes
 */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const john = new User('John', 42);
const jane = new User('Jane', 35);

console.log(john.greet());
console.log(jane.greet());

/**
 * On peut tout additionner, même des chaînes de caractères et des nombres.
 */
const result1 = 1 + '2'; // '12'
const result2 = '1' + 2; // '12'
const result3 = 1 + true; // 2
const result4 = 1 + []; // '1'
const result5 = 1 + [2]; // '12'

/**
 * On peut créer des chaines de caractères avec des variables
 */
const message1 = `Bonjour, je m'appelle ${fisrtname} et j'ai ${age} ans.`;
const message2 = 'Bonjour, je m\'appelle ' + fisrtname + ' et j\'ai ' + age + ' ans.';
const message3 = "Bonjour, je m'appelle " + fisrtname + " et j'ai " + age + ' ans.';

/**
 * On peut créer des objets dans répéter le nom de la propriété
 */
const name = 'John';
const user1 = { name: name, age: 42 };
const user2 = { name, age: 42 };

/**
 * On peut récupérer les propriétés d'un objet dans des variables
 */
const legume = { color: 'Green', weight: 1 };
const { color, weight } = legume;
/**
 * pareil que
 * const color = legume.color;
 * const weight = legume.weight;
 */

const { color: color2, weight: weight2 } = legume;
/**
 * pareil que
 * const color2 = legume.color;
 * const weight2 = legume.weight;
 */
