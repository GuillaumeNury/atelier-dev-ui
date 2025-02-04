import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';

// https://angular.dev/api/common/DatePipe?tab=usage-notes

@Component({
  selector: 'app-ng-pipes',
  imports: [DatePipe, DecimalPipe, CurrencyPipe],
  // Dans les applications, LOCALE_ID est déjà géré
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  template: `
    <table>
      <thead>
        <tr>
          <th>Format</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>short</td>
          <td>{{ now | date: 'short' }}</td>
        </tr>
        <tr>
          <td>shortDate</td>
          <td>{{ now | date: 'shortDate' }}</td>
        </tr>
        <tr>
          <td>medium</td>
          <td>{{ now | date: 'medium' }}</td>
        </tr>
        <tr>
          <td>mediumDate</td>
          <td>{{ now | date: 'mediumDate' }}</td>
        </tr>
        <tr>
          <td>long</td>
          <td>{{ now | date: 'long' }}</td>
        </tr>
        <tr>
          <td>longDate</td>
          <td>{{ now | date: 'longDate' }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class NgPipesComponent {
  now = new Date();
}
