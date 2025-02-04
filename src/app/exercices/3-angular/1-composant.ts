import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';

type Animal =
  | { type: 'Dog'; name: string; breed: string }
  | { type: 'Cat'; name: string; color: string };

@Component({
  selector: 'app-example',
  standalone: true, // Plus besoin de cette ligne à partir d'Angular 19
  imports: [ButtonComponent],
  template: `
    <h1>{{ title() }}</h1>

    @if (description()) {
      <p>{{ description() }}</p>
    } @else {
      <p>No description</p>
    }
    @for (animal of animals; track animal.name) {
      <div>
        <h2>{{ animal.name }}</h2>

        @switch (animal.type) {
          @case ('Cat') {
            <p>Color: {{ animal.color }}</p>
            <button luButton (click)="meow.emit(animal)">Meow</button>
          }
          @case ('Dog') {
            <p>Race: {{ animal.breed }}</p>
            <button luButton (click)="bark.emit(animal)">Bark</button>
          }
        }
      </div>
    }
  `,
  // templateUrl: './example.component.html',
  // styleUrl: './example.component.scss'
})
export class ExampleComponent {
  title = input.required<string>(); // Plante si on utilise <app-example /> sans attribut title

  description = input<string>(); // Par défaut, description est undefined

  bark = output<Animal>();
  meow = output<Animal>();

  animals: Animal[] = [
    { type: 'Dog', name: 'Rantamplan', breed: 'Berger Allemand' },
    { type: 'Cat', name: 'Garfield', color: 'Orange' },
    { type: 'Dog', name: 'Snoopy', breed: 'Beagle' },
  ];
}

@Component({
  selector: 'app-parent',
  standalone: true,
  template: `
    <app-example
      [title]="title"
      description="A list of my pets"
      (bark)="bark($event)"
      (meow)="meow($event)"
    />
  `,
  imports: [ExampleComponent],
})
export class ParentComponent {
  title = 'My pets';

  bark(animal: Animal) {
    alert(`Wouf ${animal.name}`);
  }

  meow(animal: Animal) {
    alert(`Miaou ${animal.name}`);
  }
}
