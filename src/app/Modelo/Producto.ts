export class Producto {
    idproducto: number;
    nombre: string;
    precio: number;
    cantidad: number;
    categoria: {
        idporducto:number,
        nombre: string
    };
}