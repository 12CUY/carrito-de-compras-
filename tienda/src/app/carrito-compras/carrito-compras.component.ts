import { Component } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  mostrarPago= false; // Variable para controlar la visualización de la sección de pago
  //instancia actual ths

  constructor(private carritoService: CarritoComprasService) {}

  // Propiedad calculada que devuelve la lista de productos del carrito
  get productos(): any[] {
    return this.carritoService.productos;
  }

  // Método para calcular 
  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  // Método para eliminar
  eliminarProducto(index: number): void {
    this.carritoService.productos.splice(index, 1);
  }

  // Método para realizar el pago
  realizarPago(): void {
    this.mostrarPago = true;
  }
}
