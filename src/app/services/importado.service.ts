import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Importado } from '../models/importado';
import { Global } from './global';

@Injectable()
export class ImportadoService {
  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }


  saveImportado(importado: Importado): Observable<any>{
    let params = JSON.stringify(importado);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'newImport',params,{headers: headers});
  }


  getImportados(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'Import',{headers: headers});
  }

  getImportado(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'Import/'+id,{headers: headers});    
  }

  deleteImport(id): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+'deleteImport/'+id,{headers: headers});        
  }

  updateImport(importado): Observable<any>{
      let params = JSON.stringify(importado);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url+'updateImport/'+importado.id_importado,params,{headers: headers});            
  }


}