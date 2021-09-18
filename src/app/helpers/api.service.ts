import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private clienteHttp: HttpClient) { }

  traerConGet() {
   // this.clienteHttp.get();
  }
}
