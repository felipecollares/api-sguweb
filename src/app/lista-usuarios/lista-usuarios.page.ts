import { Usuario, UsuarioService } from './../servico/usuarios.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {

  usuarios : Usuario[];

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      //console.log(response);
      this.usuarios = response;
    })
  }
  remover(id : any){

  }
}
