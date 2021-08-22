import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Entidades/persona';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  persona: Persona;
  claseDni: string = 'rojo';
  tipoControl: string = 'text';

  setValue(valor:string) {
    if (valor == 'document') {
      valor = (<HTMLInputElement>document.getElementById('txtNombre')).value;
    }
    this.persona.nombre = valor;
  }

  constructor() {
    this.persona = {nombre:"Leonel", apellido:"Girett", dni:36946390}
    //this.persona.nombre = 'ingrese';
   }

  cambiarClase() {
    this.claseDni = 'azul';
  }
  ngOnInit(): void {
  }
  mostrar() {
    alert(this.persona.nombre + ' ' + this.persona.apellido + ' ' + this.persona.dni);
    this.tipoControl = 'number';
  }

}
