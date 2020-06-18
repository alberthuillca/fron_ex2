import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from '../Modelo/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
  
})
export class ProductoService {
  

  constructor(private http:HttpClient, private router:Router) { }


  listaProducto(): Observable<Producto[]>{
    console.log("habla")
    return this.http.get<Producto[]>(`${ environment.apiUrl }/producto`);
  }
  crearProducto(producto:Producto){
    return this.http.post<Producto>(`${ environment.apiUrl }/producto`,producto);
  }
  deleteProducto(id:number){
    console.log(id + " ella")
   return this.http.delete<Producto>(`${ environment.apiUrl }/producto/`+ id);

  }
  editarProducto(producto:Producto){
    console.log(producto)
   return this.http.put<Producto>(`${ environment.apiUrl }/producto/`+ producto.id, producto);
  
  }
  
}
