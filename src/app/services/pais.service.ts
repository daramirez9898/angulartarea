import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';
import { Global } from './global';


@Injectable()
export class PaisService {
  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }


  savePais(pais: Pais): Observable<any>{
    let params = JSON.stringify(pais);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'newPais',params,{headers: headers});
  }


  getPaises(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'Paises',{headers: headers});
  }

  getPais(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'Paises/'+id,{headers: headers});    
  }

  deletePais(id): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+'deletePais/'+id,{headers: headers});        
  }

  updatePais(pais): Observable<any>{
      let params = JSON.stringify(pais);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url+'updatePais/'+pais.id_pais,params,{headers: headers});            
  }



}




