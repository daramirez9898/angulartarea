import { Component, OnInit } from '@angular/core';import { Producto } from '../../models/producto';
import { PaisService } from '../../services/pais.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Pais } from '../../models/pais';


@Component({
  selector: 'app-editar-pais',
  templateUrl: '../agregar-pais/agregar-pais.component.html',
  styleUrls: ['./editar-pais.component.css'],
  providers: [PaisService]
})
export class EditarPaisComponent implements OnInit {
  public pais: Pais;
  public status: string;
  public url: string;

  constructor(
    private _paisService: PaisService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
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

  onSubmit(form){
    this._paisService.updatePais(this.pais).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrarPais']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }


}
