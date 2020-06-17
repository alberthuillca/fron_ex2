export class Producto {
    idproducto: number;
    nombreprod: string;
    precio: number;
    cantidad: number;
    categoria: {
        idporducto:number,
        nombre: string
    };
}