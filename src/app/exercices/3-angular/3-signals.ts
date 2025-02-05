import { signal, computed, effect, Component } from '@angular/core';

/**
 * Par défaut, on ne peut pas écrire dans un signal.
 * Pour le lire, on appelle la fonction retournée par signal.
 */
const number = signal(12);
console.log(number()); // 12

/**
 * Écriture (avec set ou update)
 */
number.set(24);

number.update((value) => value + 1);
number.set(number() + 1); // Idem que la ligne précédente

/**
 * Création de valeurs dérivées (computed) : elles sont recalculées à chaque fois que les valeurs qu'elles utilisent changent.
 */
const double = computed(() => number() * 2);

console.log(double()); // 50

number.set(21);

console.log(double()); // 42

const a = signal(1);
const b = signal(2);
const sum = computed(() => a() + b());

/**
 * À éviter au maximum, mais peut être utile pour débugger.
 */
@Component({
  selector: 'app-signals',
  template: ``,
})
export class SignalsExampleComponent {
  a = signal(1);
  b = signal(2);

  sum = computed(() => this.a() + this.b());

  constructor() {
    // Effect ne peut être utilisé que dans un contructeur de composant/directive/service/pipe.
    // Si on peut l'utiliser ailleurs, il faut jouer avec l'injection de dépendances : c'est rarement nécessaire.
    effect(() => {
      console.log(`${this.a()} + ${this.b()} = ${this.sum()}`);
    });

    setTimeout(() => {
      this.a.set(2);
    }, 1000);

    // On va avoir de plus en plus de signaux, on a aujoud'hui :
    // - signal (lecture / écriture)
    // - computed (lecture seule)
    // - input (lecture seule)
    // - model (lecture / écriture)
    // - linkedSignal (lecture / écriture)
    // - toSignal(observable$) (lecture seule)
  }
}
