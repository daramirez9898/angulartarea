import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-agregar-pais',
  templateUrl: './agregar-pais.component.html',
  styleUrls: ['./agregar-pais.component.css'],
  providers: [PaisService]
})
export class AgregarPaisComponent implements OnInit {

  public pais: Pais;
  public status: string;

  constructor(
    private _paisService: PaisService
  ) { 
    this.pais = new Pais(0,'');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.pais);
    this._paisService.savePais(this.pais).subscribe(
      response =>{
        if(response){
          this.status = 'success';
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
  