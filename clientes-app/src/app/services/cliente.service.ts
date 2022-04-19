
import { Cliente } from './../clientes/cliente';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor( private http: HttpClient) { }

  //old version with interface
  /*
  getClientes(): Cliente[]{
    return CLIENTES;
  }
  */

  //new version with observable
  /*
  getClientes():Observable<Cliente[]>{
    return of(CLIENTES);
  }
  */


  //new version desde el service
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //new version desde el service
  getClientesMap():Observable<Cliente[]>{
    return this.http.get(this.url).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    return this.http.post<Cliente>(this.url, cliente, {headers: this.httpHeaders});
  }

  getCliente(id:number): Observable<Cliente>{
    return this.http.get<Cliente> (`${this.url}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente> (`${this.url}/${cliente.id}`,cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.url}/${id}`, {headers:this.httpHeaders})
  }


}
