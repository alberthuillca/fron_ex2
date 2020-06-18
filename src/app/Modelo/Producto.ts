import { Categoria } from 'src/app/Modelo/Categoria';
export class Producto {
    id: number;
    nombreprod: string;
    precio: number;
    cantidad: number;
    categoria: Categoria;
}