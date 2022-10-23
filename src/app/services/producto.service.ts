import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpclient: HttpClient) {

  }
  getAll(): Observable<any>{
    return this.httpclient.get(`${environment.apiUrl}/producto`);
  }
  create(producto: any): Observable<any>{
    return this.httpclient.post(`${environment.apiUrl}/producto`,producto);
  }
  update(producto: any): Observable<any>{
    return this.httpclient.put(`${environment.apiUrl}/producto`,producto);
  }
  delete(idProducto: any): Observable<any>{
    return this.httpclient.delete(`${environment.apiUrl}/producto/${idProducto}`,);
  }
  getCategoria():Observable<any>{
   return this.httpclient.get(`${environment.apiUrl}/categoria`);
  }
  getMarca():Observable<any>{
    return this.httpclient.get(`${environment.apiUrl}/marca`);
  }
  getByid(idProducto: any): Observable<any>{
    return this.httpclient.get(`${environment.apiUrl}/producto/${idProducto}`,);
  }
}
