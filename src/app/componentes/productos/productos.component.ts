import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: Array<any> = [];
  /*confirm: number = 0; 
  display: string = 'none'
  closeResult: string = '';*/

  editForm = this.fb.group({
    id_producto: [],
    titulo: [],
    descripcion: [],
    puntaje: [],
    imagen: [],
    anio: [],
    trailer: [],
  });

  productoEdit: any;

  constructor(public productoService: ProductosService, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      console.log(data)
      this.producto = data;
    }); 
  }

  onDeleteProducto(id: number) {
    this.productoService.deleteProducto(id).subscribe( data => {
      console.log(data);
    });
    window.location.reload();
  }

  seleccionarProducto(id:number) {
    this.productoService.getProducto(id).subscribe( data => {
      this.updateForm(data[0])
    })
  }

  updateForm(producto: any): void {
    this.editForm.patchValue({
      id_producto: producto.id_producto,
      titulo: producto.titulo,
      descripcion: producto.descripcion,
      puntaje: producto.puntaje,
      imagen: producto.imagen,
      anio: producto.anio,
      trailer: producto.trailer
    });
  }

  private createFromForm(): any {
    return {
      id_producto: this.editForm.get(['id_producto'])!.value,
      titulo: this.editForm.get(['titulo'])!.value,
      descripcion: this.editForm.get(['descripcion'])!.value,
      puntaje: this.editForm.get(['puntaje'])!.value,
      imagen: this.editForm.get(['imagen'])!.value,
      anio: this.editForm.get(['anio'])!.value,
      trailer: this.editForm.get(['trailer'])!.value,
    };
  }

  editarProducto() {
    const producto = this.createFromForm();
    this.productoService.editarProducto(producto).subscribe( data => {
      console.log(data);
    });
    window.location.reload();
  }

  altaProducto() {
    const producto = this.createFromForm();
    this.productoService.agregarProducto(producto).subscribe( data => {
      console.log(data);
    });
    window.location.reload();
  }

  limpiar() {
    this.editForm.patchValue({
      id_producto: "",
      titulo: "",
      descripcion: "",
      puntaje: "",
      imagen: "",
      anio: "",
      trailer: ""
    });
  }

  // Angular Modal

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }


}