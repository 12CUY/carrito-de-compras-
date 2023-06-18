import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  productos: any[] = [];

  agregarProducto(producto: any): void {
    this.productos.push(producto);
  }
}
