import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar-pais',
  templateUrl: './modificar-pais.component.html',
  styleUrls: ['./modificar-pais.component.css'],
  providers: [PaisService]
})
export class ModificarPaisComponent implements OnInit {
  public url:string;
  public pais: Pais;

  constructor(
    private _paisService: PaisService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.pais = new Pais(0,'');
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getPais(id);
    });

  }


  getPais(id){
    this._paisService.getPais(id).subscribe(
      response =>{
        console.log(response);
        this.pais= response[0];
        console.log(this.pais);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  deleteProducto(id){
    this._paisService.deletePais(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrarPais']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    ) 
  }

}
