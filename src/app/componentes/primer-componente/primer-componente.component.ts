import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/Entidades/persona';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  persona: Persona;
  claseDni: string = 'rojo';
  tipoControl: string = 'text';
  nombres: Array<Persona>
  modificar: number | undefined;
  numero: string;
  

  setValue(valor:string) {
    if (valor == 'document') {
      valor = (<HTMLInputElement>document.getElementById('txtNombre')).value;
    }
    this.persona.nombre = valor;
  }

  constructor(private servicioMensajes: MensajeService, ruteo: ActivatedRoute) {
    
    this.numero = ruteo.snapshot.paramMap.get("numero")??'-25';

    this.persona = { id: 5, nombre: "Leonel", apellido: "Girett", dni: 36946390 };
    this.nombres = [{id:1, nombre: "Leonel", apellido: "Girett", dni: 36946390 },
      { id:2, nombre: "Florencia", apellido: "Juares", dni: 36934391 },
      { id:3, nombre: "Carlos", apellido: "Cruz", dni: 369463567 },];
    this.modificar= -1;
    
   }

  cambiarClase() {
    this.claseDni = 'azul';
  }
  
  ngOnInit(): void {
  }
  
  mostrar() {
    alert(this.persona.nombre + ' ' + this.persona.apellido + ' ' + this.persona.dni);
    this.tipoControl = 'number';
    this.servicioMensajes.MiMensaje = (this.nombres[2].nombre??0).toString();
  }

  mostrarEnAlert(valor:string):void {
    alert(valor);
  }
  mostrarSeleccionado() {
    let persona = (<HTMLInputElement>document.getElementById('opPersonas')).value;
    alert(persona);
  }
  modifica(idAmodificar:number | undefined) {
    this.modificar = idAmodificar;
  }
noModifica() {
    this.modificar =-1;
  }
}
