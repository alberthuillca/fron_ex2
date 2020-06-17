import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto = new Producto();
  producto: Producto[]=[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.listaProducto().subscribe(
      (data) => {
        this.producto = data;
        console.log(this.producto);
      }
    );
  }

}
