export {};

/**
 * On peut déclarer des champs internes à la classe, pareil pour les méthodes
 */

class Animal {
  private name: string;
  protected legs: number = 4;

  constructor(name: string) {
    this.name = name;
  }

  public move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

const dog = new Animal('Dog');
dog.move(10);

/**
 * Le mot clé protected permet de rendre un champ accessible aux classes filles
 */
class FasterDog extends Animal {
  constructor() {
    super('Faster Dog');

    this.legs = 5;
  }

  public override move(distance: number): void {
    // Name est privé, on ne peut pas y accéder
    console.log(`${this.name} ran ${distance} meters on ${this.legs} legs.`);
  }
}

const fasterDog = new FasterDog();
fasterDog.move(20);
