import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/Entidades/persona';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  @Input() persona!: Persona;
  @Output() mostrarPersona =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  mostrar() {
    this.mostrarPersona.emit((this.persona.apellido??'') + ' ' + this.persona.nombre??'');
  }

}
