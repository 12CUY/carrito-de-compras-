import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  productos: any[] = []; // Array para almacenar los productos

  agregarProducto(producto: any): void {
    this.productos.push(producto); // Agrega un producto al array de productos
  }
}
