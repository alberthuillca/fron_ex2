import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Categoria } from '../Modelo/Categoria';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient, private router:Router) { }

  
  listaCategoria(): Observable<Categoria[]>{
    console.log("hi")
    return this.http.get<Categoria[]>(`${ environment.apiUrl }/categoria`);
  }

  crearCategoria(categoria:Categoria){
    return this.http.post<Categoria>(`${ environment.apiUrl }/categoria`,categoria);
  }
  deleteCategoria(id:number){
    console.log(id + " ella")
   return this.http.delete<Categoria>(`${ environment.apiUrl }/categoria/`+ id);

  }
  editarCategoria(categoria:Categoria){
    console.log(categoria)
   return this.http.put<Categoria>(`${ environment.apiUrl }/categoria/`+ categoria.idcategoria, categoria);
  
  }
}
