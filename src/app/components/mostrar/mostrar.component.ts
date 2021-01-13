import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
  providers: [ProductoService]
})
export class MostrarComponent implements OnInit {
  public productos: Producto[]
  constructor(
    private _productoService: ProductoService
  ){ }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos().subscribe(
      response =>{
        this.productos = response;
      },
      error => {
        console.log(<any> error);
      }
      
    );
  }

}
