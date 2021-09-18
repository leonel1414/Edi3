import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Entidades/persona';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {
  personas: Array <Persona>;

  constructor(public ms: MensajeService) {
    this.personas = [{id:1, nombre: "Leonel", apellido: "Girett", dni: 36946390 },
      { id:2, nombre: "Florencia", apellido: "Juares", dni: 36934390 },
      { id:3, nombre: "Carlos", apellido: "Cruz", dni: 369463567 },];;
  }

  ngOnInit(): void {
  }
  verEnAlert(text: string) {
    alert(text);
  
  }

}
