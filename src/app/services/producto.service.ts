import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Global } from './global';

@Injectable()
export class ProductoService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de angular';
    }

    saveProducto(producto: Producto): Observable<any>{
        let params = JSON.stringify(producto);
        let headers = new HttpHeaders().set('Content-Type','application/json');
    
        return this._http.post(this.url+'newProducto',params,{headers: headers});
      }

    getProductos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'Productos',{headers: headers});
    }

    getProducto(id: number): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'Productos/'+id,{headers: headers});    
    }

    
}