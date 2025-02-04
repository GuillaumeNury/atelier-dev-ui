import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true, // Plus besoin de cette ligne à partir d'Angular 19
  template: `
    <h1>
      <ng-content select=".card-title" />
    </h1>

    <div class="content">
      <ng-content />
    </div>

    <footer>
      <ng-content select=".card-footer" />
    </footer>
  `,
})
export class CardComponent {}

@Component({
  selector: 'app-parent',
  standalone: true,
  template: `
    <app-card>
      <div class="card-title">{{ title }}</div>

      <button (click)="bark()">Bark</button>
      <button (click)="meow()">Meow</button>

      <div class="card-footer">Footer</div>
    </app-card>
  `,
  imports: [CardComponent],
})
export class ParentComponent {
  title = 'My pets';

  bark() {
    alert('Wouf');
  }

  meow() {
    alert('Miaou');
  }
}

/**
 * On obtient le HTML suivant :
 *
 * <app-parent>
 *   <app-card>
 *     <h1>
 *       <div class="card-title">My pets</div>
 *     </h1>
 *     <div class="content">
 *       <button>Bark</button>
 *       <button>Meow</button>
 *     </div>
 *     <footer>
 *       <div class="card-footer">Footer</div>
 *     </footer>
 *   </app-card>
 * </app-parent>
 *
 */
