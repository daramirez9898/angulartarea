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
  public productos: Producto[];

  constructor(
    private _productoService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;
      console.log(id);
      this.getProducto(id);
    });

  }


  getProducto(id : number){
    this._productoService.getProducto(id).subscribe(
      response =>{
        console.log(response);
        this.productos = response;
        console.log(this.productos);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }
}
