import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  esAdmin;
  constructor() {
    this.esAdmin = localStorage.getItem("usuario") == "admin";
  }

  ngOnInit(): void {
  }
  salir() {
    localStorage.removeItem("usuario");
  }

}
