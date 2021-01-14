import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
  providers: [ProductoService]
})
export class ModificarComponent implements OnInit {

  public url: string;
  public producto: Producto;

  constructor(
    private _productoService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){ 
    this.url = Global.url;
    this.producto = new Producto(0,'',0);
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getProducto(id);
    });

  }


  getProducto(id){
    this._productoService.getProducto(id).subscribe(
      response =>{
        console.log(response);
        this.producto= response[0];
        console.log(this.producto);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  deleteProducto(id){
    this._productoService.deleteProducto(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrar']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
