import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Usuario{
  id:string;
  nome:string;
  email:string;
}

export interface UsuarioLogin{
  ccd_usuario:string;
  csenha:string;
}

export interface User{
  status:string;  
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

  login(Ulogin : UsuarioLogin){
    ///console.log(Ulogin);
    return this.http.put(this.url, Ulogin);
    
  }
}