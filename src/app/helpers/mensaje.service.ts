import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  
  private miMensaje !: string;
  public get MiMensaje() : string {
    return this.miMensaje;
  }
  public set MiMensaje(v : string) {
    this.miMensaje = v;
  }
  
  constructor() { }
}
