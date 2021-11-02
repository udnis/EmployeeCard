import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private apiServerUrl = 'https://jsonplaceholder.typicode.com/users';

  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiServerUrl);
  }

  public addEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.apiServerUrl, employee);
  }

  public deletemployee(employee: Employee): Observable<Employee[]> {
    return this.http.delete<Employee[]>(this.apiServerUrl + '/' + employee.id);
  }
}
