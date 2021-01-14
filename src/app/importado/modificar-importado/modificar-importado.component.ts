import { Component, OnInit } from '@angular/core';
import { Importado } from '../../models/importado';
import { ImportadoService } from '../../services/importado.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar-importado',
  templateUrl: './modificar-importado.component.html',
  styleUrls: ['./modificar-importado.component.css'],
  providers: [ImportadoService]
})
export class ModificarImportadoComponent implements OnInit {
  public url:string;
  public importado: Importado;

  constructor(
    private _importadoService: ImportadoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.importado= new Importado(0,0,new Date(),0,0);
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

  deleteImport(id){
    this._importadoService.deleteImport(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrarImportado']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    ) 
  }
}
