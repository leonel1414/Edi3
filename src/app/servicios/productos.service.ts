import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor( private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get("https://serviback.herokuapp.com/productos");
  }

  getProducto(id:number): Observable<any> {
    const formData = new FormData();
    formData.append('id_producto', id.toString());
    return this.http.post("https://serviback.herokuapp.com/FormModProducto", formData);
  }

  deleteProducto(id: number): Observable<any> {
    const formData = new FormData();
    formData.append('id_producto', id.toString());
    return this.http.post(`https://serviback.herokuapp.com/eliminarproducto/`, formData);
  }

  agregarProducto(producto: any): Observable<any> {
    const formData = new FormData();
    formData.append('titulo', producto.titulo);
    formData.append('descripcion', producto.descripcion);
    formData.append('puntaje', producto.puntaje);
    formData.append('imagen', producto.imagen);
    formData.append('anio', producto.anio);
    formData.append('trailer', producto.trailer);

    return this.http.post(`https://serviback.herokuapp.com/altaproducto`, formData);
  }

  
  editarProducto(producto: any): Observable<any> {
    const formData = new FormData();
    formData.append('id_pelicula', producto.id_pelicula);
    formData.append('titulo', producto.titulo);
    formData.append('descripcion', producto.descripcion);
    formData.append('puntaje', producto.puntaje);
    formData.append('imagen', producto.imagen);
    formData.append('anio', producto.anio);
    formData.append('trailer', producto.trailer);

    return this.http.post(`https://serviback.herokuapp.com/modificarproducto`, formData);
  }

 
}
