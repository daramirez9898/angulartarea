import { Component, OnInit } from '@angular/core';
import { ImportadoService } from '../../services/importado.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { Importado } from '../../models/importado';

@Component({
  selector: 'app-editar-importado',
  templateUrl: '../agregar-importado/agregar-importado.component.html',
  styleUrls: ['./editar-importado.component.css'],
  providers: [ImportadoService]
})
export class EditarImportadoComponent implements OnInit {

  public importado: Importado;
  public status: string;
  public url: string;

  constructor(
    private _importadoService: ImportadoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
  }
  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getImport(id);
    });
  }

  getImport(id){
    this._importadoService.getImportado(id).subscribe(
      response =>{
        console.log(response);
        this.importado= response[0];
        console.log(this.importado);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  onSubmit(form){
    this._importadoService.updateImport(this.importado).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrarImportado']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
