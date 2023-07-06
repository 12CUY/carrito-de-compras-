import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  productos: any[] = [];
  private backendUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) {}

  agregarProducto(producto: any): void {
    this.productos.push(producto);
  }

  guardarCarritoEnBackend(): void {
    const url = `${this.backendUrl}/carrito`; // Endpoint del backend para guardar el carrito
    this.http.post(url, { productos: this.productos })
      .subscribe(
        () => {
          console.log('Carrito guardado en el backend');
        },
        error => {
          console.error('Error al guardar el carrito en el backend:', error);
        }
      );
  }
}
