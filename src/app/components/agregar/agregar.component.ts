import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [ProductoService]
})
export class AgregarComponent implements OnInit {

  public producto: Producto;
  public status: string;

  constructor(
    private _productoService: ProductoService
  ){
    this.producto = new Producto(0,'',0);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.producto);
    this._productoService.saveProducto(this.producto).subscribe(
      response =>{
        if(response){
          this.status = 'success';
        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
