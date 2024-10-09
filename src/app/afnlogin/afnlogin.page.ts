import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DATOS_LOGIN } from "./../interfaces/datosLogin";

@Component({
  selector: 'app-afnlogin',
  templateUrl: './afnlogin.page.html',
  styleUrls: ['./afnlogin.page.scss'],
})
export class AfnloginPage implements OnInit {
  public usuario: string = "";
  public password: string = "";
  public passOk: boolean = false;

  constructor(private router: Router) { }

  public validaUsuario() {

    for (let usuario of DATOS_LOGIN) {
      console.log(usuario)
      console.log("este es el usuario del form " + this.usuario)
      console.log("este es la pass del form " + this.password)
      if (usuario.email === this.usuario && usuario.password === this.password) {
        this.passOk = true;
        break;
      }
    }
    if (this.passOk) {
      alert("Bienvenido " + this.usuario);
      this.passOk = false;
      this.router.navigate(['/afnlista', this.usuario]);
    } else {
      alert("Usuario incorrecto");
    }
  }


  ngOnInit() {
  }

}
