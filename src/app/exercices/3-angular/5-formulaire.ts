import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  template: `
    <form>
      <!-- S'il y a un form englobant, il faut bien mettre un name sur chaque [ngModel] -->
      <input [(ngModel)]="name" name="name" placeholder="Name" />

      <input
        [ngModel]="email"
        (ngModelChange)="email = $event"
        name="email"
        placeholder="Email"
      />

      <input [(ngModel)]="password" name="password" placeholder="Password" />

      <input
        [(ngModel)]="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm password"
      />

      @if (password !== confirmPassword) {
        <p>Passwords do not match</p>
      }
    </form>
  `,
})
export class FormsComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
}

@Component({
  selector: 'app-signal-forms',
  imports: [FormsModule],
  template: `
    <form>
      <!-- On peut directement donner un WritableSignal ici ! -->
      <input [(ngModel)]="name" name="name" placeholder="Name" />

      <input
        [ngModel]="email()"
        (ngModelChange)="email.set($event)"
        name="email"
        placeholder="Email"
      />

      <input [(ngModel)]="password" name="password" placeholder="Password" />

      <input
        [(ngModel)]="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm password"
      />

      @if (password() !== confirmPassword()) {
        <p>Passwords do not match</p>
      }
    </form>
  `,
})
export class FormsWithSignalComponent {
  name = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
}

@Component({
  selector: 'app-signal-forms',
  imports: [ReactiveFormsModule],
  template: `
    <form>
      <input
        [formControl]="form.controls.name"
        name="name"
        placeholder="Name"
      />

      <ng-container [formGroup]="form">
        <input formControlName="email" name="email" placeholder="Email" />

        <input
          formControlName="password"
          name="password"
          placeholder="Password"
        />

        <input
          formControlName="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
        />
      </ng-container>

      @if (form.value.password !== form.value.confirmPassword) {
        <p>Passwords do not match</p>
      }
    </form>
  `,
})
export class ReactiveFormComponent {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
}
