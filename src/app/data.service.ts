import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { URL } from './url';
import { login } from './models/login';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }

  public loginUser(): Observable<any> {
    return this.http.get(URL.LOGIN);
  }
  
}
