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
    return this.http.get<Producto[]>(`${ environment.apiUrl }/productos/`);
  }
  crearProducto(producto:Producto){
    return this.http.post<Producto>(`${ environment.apiUrl }/productos/add`,producto);
  }
  deleteProducto(producto:Producto){
   return this.http.put<Producto>(`${ environment.apiUrl }/productos/D`, producto);

  }
  editarProducto(producto:Producto){
   return this.http.put<Producto>(`${ environment.apiUrl }/productos/ `+producto.idproducto,producto);
  
  }
  
}
