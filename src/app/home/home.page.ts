import { Usuario, UsuarioService, User } from './../servico/usuarios.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {
  usuarios : Usuario[];
  user : User;

  constructor(private service: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      //console.log(response);
      this.usuarios = response;
    })
  }
  remover(id : any){

  }
  enviaLogin(form : NgForm){
    //console.log(form.value);
    const UsuarioLogin = form.value;
    this.service.login(UsuarioLogin).subscribe(response =>{

      if (response['status'] === "successo"){
        this.router.navigate(['/lista-usuarios']);
      }
      else
      {
        this.router.navigate(['/user-alert']);
      }
    })

  }
}
