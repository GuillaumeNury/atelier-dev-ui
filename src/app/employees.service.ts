import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UsersResponse } from './employees.models';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  #httpClient = inject(HttpClient);

  getCollection() {
    return this.#httpClient.get<UsersResponse>(
      '/api/v3/users?fields=id,name,picture.href'
    );
  }
}
