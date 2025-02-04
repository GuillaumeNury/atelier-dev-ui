import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@lucca-front/ng/button';
import { map } from 'rxjs';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-users',
  imports: [RouterOutlet, ButtonComponent],
  template: `
    <section class="section">
      @for (employee of employees(); track employee.id) {
        <div class="employee">
          <h2>{{ employee.name }}</h2>
        </div>
      }
    </section>
  `,
})
export class UsersPage {
  #employeesService = inject(EmployeesService);

  employees = toSignal(
    this.#employeesService
      .getCollection()
      .pipe(map((response) => response.data.items)),
  );
}
