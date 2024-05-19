import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleToEmployee } from '../models/roleToEmployee';

@Injectable({
  providedIn: 'root'
})
export class RoleToEmployeeService {

  constructor(private _http: HttpClient) { }
  // addARoleToEmployee(role: RoleToEmployee): Observable<RoleToEmployee> {
  //   return this._http.post<RoleToEmployee>(`https://localhost:7033/api/RoleToEmployee`, role)
  // }
 
     
}
