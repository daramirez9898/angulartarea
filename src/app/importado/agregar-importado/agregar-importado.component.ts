import { Component, OnInit } from '@angular/core';
import { Importado } from '../../models/importado';
import { ImportadoService } from '../../services/importado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-importado',
  templateUrl: './agregar-importado.component.html',
  styleUrls: ['./agregar-importado.component.css'],
  providers: [ImportadoService]
})
export class AgregarImportadoComponent implements OnInit {

  public importado: Importado;
  public status: string;

  constructor(
    private _importadoService: ImportadoService,
    private _router: Router
  ) { 
    this.importado = new Importado(0,0,new Date(),0,0);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.importado);
    this._importadoService.saveImportado(this.importado).subscribe(
      response =>{
        if(response){
          this.status = 'success';
          this._router.navigate(['mostrarImportado']);
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
