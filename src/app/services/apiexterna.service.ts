import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiexternaService {

  constructor(private http: HttpClient) { }

  private API_Externa = "https://jritsqmet.github.io/web-api/crash.json";

  getApi(): Observable <any>{
    return this.http.get( this.API_Externa)
  }
}
