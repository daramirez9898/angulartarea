import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-mostrar-pais',
  templateUrl: './mostrar-pais.component.html',
  styleUrls: ['./mostrar-pais.component.css'],
  providers: [PaisService]
})
export class MostrarPaisComponent implements OnInit {

  public paises: Pais[]
  constructor(
    private _paisService: PaisService
  ){ }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(){
    this._paisService.getPaises().subscribe(
      response =>{
        this.paises = response;
      },
      error=>{
        console.log(<any> error);
      }
    );
  }

}
