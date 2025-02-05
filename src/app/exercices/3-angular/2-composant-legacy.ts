import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';

type Animal =
  | { type: 'Dog'; name: string; breed: string }
  | { type: 'Cat'; name: string; color: string };

@Component({
  selector: 'app-example',
  standalone: false, // Besoin de cette ligne à partir d'Angular 19
  template: `
    <h1>{{ title }}</h1>

    <p *ngIf="description; else noDescription">{{ description }}</p>

    <ng-template #noDescription>
      <p>No description</p>
    </ng-template>

    <div *ngFor="let animal of animals; trackBy: trackByFn">
      <h2>{{ animal.name }}</h2>

      <ng-container [ngSwitch]="animal.type">
        <div *ngSwitchCase="'Cat'">
          <p>Color: {{ $any(animal).color }}</p>
          <button (click)="meow.emit(animal)">Meow</button>
        </div>
        <div *ngSwitchCase="'Dog'">
          <p>Race: {{ $any(animal).breed }}</p>
          <button (click)="bark.emit(animal)">Bark</button>
        </div>
      </ng-container>
    </div>
  `,
  // templateUrl: './example.component.html',
  // styleUrl: './example.component.scss'
})
export class ExampleComponent {
  @Input({ required: true }) title?: string;

  @Input() description?: string;

  @Output() bark = new EventEmitter<Animal>();
  @Output() meow = new EventEmitter<Animal>();

  animals: Animal[] = [
    { type: 'Dog', name: 'Rantamplan', breed: 'Berger Allemand' },
    { type: 'Cat', name: 'Garfield', color: 'Orange' },
    { type: 'Dog', name: 'Snoopy', breed: 'Beagle' },
  ];

  trackByFn = (index: number, animal: Animal) => animal.name;
}

@Component({
  selector: 'app-parent',
  standalone: false,
  template: `
    <app-example
      [title]="title"
      description="A list of my pets"
      (bark)="bark($event)"
      (meow)="meow($event)"
    />
  `,
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

@NgModule({
  imports: [ButtonComponent, CommonModule], // Ou NgIf, NgFor, etc.
  declarations: [ExampleComponent, ParentComponent],
  exports: [ParentComponent],
})
export class ParentModule {}
