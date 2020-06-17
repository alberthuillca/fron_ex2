import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto = new Producto();
  productos: Producto[]=[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    alert("gii");
    this.productoService.listaProducto().subscribe(
      (data) => {
        this.productos = data;
        alert(data)
        console.log(data)
        console.log(this.productos);
      }
    );
  }

}
