import { Usuario, UsuarioService } from './../servico/usuarios.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
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
