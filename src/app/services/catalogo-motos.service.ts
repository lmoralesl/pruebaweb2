import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoMotosService {

  constructor(private http: HttpClient) { }

  private API_Motocicleta = "http://localhost:3000/motocicletas";

  getmotos(): Observable <any>{
    return this.http.get( this.API_Motocicleta)
  }
  getMotosUnico(id: any):Observable<any>{
    return this.http.get( `${this.API_Motocicleta}/${id}` )
  }
  ////////////////GUARDAR- POST//////////////
  postMotos(persona:JSON): Observable<any>{
    return this.http.post(this.API_Motocicleta, persona)
  }
  ///////////////Eliminar////////////////////////////////


deleteMotosID(id:any): Observable<any>{
  return this.http.delete(`${this.API_Motocicleta}/${id}`)
}
///////////////////EDITAR//////////////////////
putMotos(persona:any):Observable <any>{
  return this.http.put(`${this.API_Motocicleta}/${persona.id}`,persona)
}
}
