import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/Modelo/Producto';
import { Categoria } from 'src/app/Modelo/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto = new Producto();
  productos: Producto[]=[];
  proup: Producto = new Producto();


  categoria: Categoria = new Categoria();
  categorias: Categoria[]=[];
  idcat: number

  constructor(private productoService: ProductoService, private categoriaService: CategoriaService) { }

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

    this.productoService.listaProducto().subscribe(
      (data) => {
        this.productos = data;
        console.log(data)
        console.log(this.productos);
      }
    );
  }


  Guardar(){
    this.producto.categoria = this.categoria;
    console.log(this.producto)
        this.productoService.crearProducto(this.producto).subscribe(
          (data)=>{
            console.log(data)
            this.listar()
     alert(">>>> REGISTRO GUARDADO <<<<");
   })
  }

  cargar(pro: Producto) {
    this.idcat = pro.categoria["idcategoria"]
    console.log(pro)
    this.proup = pro
  }

  Actualizar(producto: Producto){
    producto.categoria["idcategoria"]=this.idcat
    this.productoService.editarProducto(producto).subscribe(
      (data) => {
        console.log(data);
        alert('Registro modificado correctamente...!');
        this.listar()
    })
  }
  eliminar(id : number) {
    this.productoService.deleteProducto(id).subscribe((data) => {
      console.log(id);
      this.listar()
    });

  }
 



}

