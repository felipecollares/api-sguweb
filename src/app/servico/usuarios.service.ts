import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Usuario{
  id:string;
  nome:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://sguweb.unicentro.br/apiRest.php';
  constructor(private http : HttpClient) { }
  getAll(){
    return this.http.get<[ Usuario ]>(this.url);
  }
}