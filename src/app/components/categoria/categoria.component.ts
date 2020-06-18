import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  categorias: Categoria[]=[];
  catup: Categoria = new Categoria();

  constructor( private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.categoriaService.listaCategoria().subscribe(
      (data) => {
        this.categorias = data;
        console.log(data)
        console.log(this.categorias);
      }
    );
  }

  
  Guardar(){
        this.categoriaService.crearCategoria(this.categoria).subscribe(
          (data)=>{
            console.log(data)
            this.listar()
     alert(">>>> REGISTRO GUARDADO <<<<");
   })
  }

  cargar(cat: Categoria) {
    console.log(cat)
    this.catup = cat
  }

  Actualizar(categoria: Categoria){
    this.categoriaService.editarCategoria(categoria).subscribe(
      (data) => {
        console.log(data);
        alert('Registro modificado correctamente...!');
        this.listar()
    })
  }
  eliminar(id : number) {
    this.categoriaService.deleteCategoria(id).subscribe((data) => {
      console.log(id);
      this.listar()
    });

  }

}
