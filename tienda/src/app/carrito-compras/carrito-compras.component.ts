import { Component } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  mostrarPago = false; // Variable para controlar la visualización de la sección de pago
  mensajeExito: string | null = null; // Variable para mostrar el mensaje de éxito
  mensajeError: string | null = null; // Variable para mostrar el mensaje de error
  persona = {
    nombre: '',
    email: '',
    telefono: ''
  };
  factura: any = null; // Variable para almacenar la información de la factura

  constructor(private carritoService: CarritoComprasService) {}

  // Propiedad calculada que devuelve la lista de productos del carrito
  get productos(): any[] {
    return this.carritoService.productos;
  }

  // Método para calcular el total de la compra
  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  // Método para eliminar un producto del carrito
  eliminarProducto(index: number): void {
    this.carritoService.productos.splice(index, 1);
  }

  // Método para realizar el pago
  realizarPago(): void {
    // Crear la factura con los datos de la persona y el total de la compra
    this.factura = {
      persona: this.persona,
      total: this.calcularTotal()
    };

    this.mostrarPago = true; // Mostrar la sección de pago
  }

  // Método para agregar los datos de la persona
  agregarPersona(): void {
    // Validar los campos del formulario
    if (this.persona.nombre && this.persona.email && this.persona.telefono) {
      // Realizar la acción correspondiente con los datos de la persona (ejemplo: guardar en una base de datos)
      // Aquí puedes agregar tu lógica personalizada

      // Mostrar mensaje de éxito
      this.mensajeExito = 'Los datos de la persona se han agregado correctamente.';
      
      // Limpiar los campos del formulario
      this.persona = {
        nombre: '',
        email: '',
        telefono: ''
      };

      // Limpiar mensaje de error, si existía
      this.mensajeError = null;
    } else {
      // Mostrar mensaje de error si algún campo está vacío
      this.mensajeError = 'Por favor, completa todos los campos del formulario.';
      
      // Limpiar mensaje de éxito, si existía
      this.mensajeExito = null;
    }
  }
}
