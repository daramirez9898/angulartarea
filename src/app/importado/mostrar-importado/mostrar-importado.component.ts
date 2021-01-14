import { Component, OnInit } from '@angular/core';
import { Importado } from '../../models/importado';
import { ImportadoService } from '../../services/importado.service';

@Component({
  selector: 'app-mostrar-importado',
  templateUrl: './mostrar-importado.component.html',
  styleUrls: ['./mostrar-importado.component.css'],
  providers: [ImportadoService]
})
export class MostrarImportadoComponent implements OnInit {
  public importados: Importado[]
  constructor(
    private _importadoService: ImportadoService
  ){ }

  ngOnInit(): void {
    this.getImportados();
  }

  getImportados(){
    this._importadoService.getImportados().subscribe(
      response =>{
        this.importados = response;
      },
      error=>{
        console.log(<any> error);
      }
    );
  }
}
 