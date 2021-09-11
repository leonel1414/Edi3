import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;

  constructor(private ruteo:Router) {
    this.usuario = '';
    if (localStorage.getItem("usuario") == "admin") {
      this.ruteo.navigate(["/primerComponente"]);
      
    }
  }

  ngOnInit(): void {
  }

  entrar() {
    localStorage.setItem("usuario", this.usuario);
    this.ruteo.navigate(["/primerComponente"]);
  }
}
