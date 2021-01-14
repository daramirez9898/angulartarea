import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: '../agregar/agregar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [ProductoService]
})
export class EditarComponent implements OnInit {

  public producto: Producto;
  public status: string;
  public url: string;

  constructor(
    private _productoService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
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

  onSubmit(form){
    this._productoService.updateProducto(this.producto).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrar']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
