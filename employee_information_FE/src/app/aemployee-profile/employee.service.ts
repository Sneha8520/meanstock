// employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/stocks';

  constructor(private http: HttpClient) {}

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employeeData);
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: string, employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, employeeData);
  }
  // Add deleteEmployee method
  deleteEmployee(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);

  }
}
