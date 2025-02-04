import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet, Routes } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-a',
  template: `A component`,
})
class AComponent {}

@Component({
  selector: 'app-b',
  template: `B component`,
})
class BComponent {}

@Component({
  selector: 'app-c-list',
  template: `C list component (page: {{ page() }})`,
})
class CListComponent {
  #route = inject(ActivatedRoute);

  page$ = this.#route.queryParamMap.pipe(
    map((params) => params.get('page')),
    map((page) => (page ? parseInt(page) : 1)),
  );

  page = toSignal(this.page$);
}

@Component({
  selector: 'app-c-item',
  template: `C item component (id: {{ id() }})`,
})
class CItemComponent {
  #route = inject(ActivatedRoute);

  id$ = this.#route.paramMap.pipe(
    map((params) => params.get('id')!),
    map((id) => parseInt(id)),
  );

  id = toSignal(this.id$);
}

@Component({
  selector: 'app-d',
  imports: [RouterOutlet],
  template: `
    D component

    <router-outlet />
  `,
})
class DComponent {}

@Component({
  selector: 'app-d1',
  template: `D1 component`,
})
class D1Component {}

@Component({
  selector: 'app-d2',
  template: `D2 component`,
})
class D2Component {}

// http://localhost:4200/routing/c?page=12
// http://localhost:4200/routing/c/42
// http://localhost:4200/routing/d

export const routes: Routes = [
  { path: 'a', component: AComponent },
  { path: 'b', loadComponent: () => BComponent },
  {
    path: 'c',
    children: [
      { path: ':id', component: CItemComponent },
      { path: '', pathMatch: 'full', component: CListComponent },
    ],
  },
  {
    path: 'd',
    component: DComponent,
    children: [
      { path: '1', component: D1Component },
      { path: '2', component: D2Component },
      { path: '**', redirectTo: '1' },
    ],
  },
  {
    path: '**',
    redirectTo: 'a',
  },
];
