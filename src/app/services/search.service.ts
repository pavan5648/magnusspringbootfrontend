import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { single } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private _http: HttpClient
  ) { }

  public categories() {
    return this._http.get(`${baseUrl}/emp`);
  }

  // retrive all employee
  public employees(){
    return this._http.get(`${baseUrl}/emp`);
  }

  // for single employee
  public sindleEmployee(eId: any){
    return this._http.get(`${baseUrl}/emp/${eId}`);
  }


  // delete employee
  public deleteEmployee(eId: any){
    return this._http.delete(`${baseUrl}/emp/${eId}`)
  }

  // update employee
  public updateEmployee(employee: any){
    return this._http.put(`${baseUrl}/emp`, employee)
  }
 
}
