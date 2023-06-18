import { Component } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  mostrarPago= false;

  constructor(private carritoService: CarritoComprasService) {}

  get productos(): any[] {
    return this.carritoService.productos;
  }

  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  eliminarProducto(index: number): void {
    this.carritoService.productos.splice(index, 1);
  }

  realizarPago(): void {
    this.mostrarPago = true;
  }
}
