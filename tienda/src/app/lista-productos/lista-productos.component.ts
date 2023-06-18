import { Component } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos = [
    { nombre: 'Dragon ball 1', precio: 15, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },
    { nombre: 'Dragon ball 2', precio: 20, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },
    { nombre: 'Dragon ball 3', precio: 25, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },
    { nombre: 'Dragon ball 4', precio: 30, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },
    { nombre: 'Dragon ball 5', precio: 35, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },    { nombre: 'Dragon ball 6', precio: 38, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },    { nombre: 'Dragon ball 7', precio: 40, imagen: 'https://phantom-marca.unidadeditorial.es/8c92b16507afb6d02c1bbf59adceea0f/resize/828/f/jpg/assets/multimedia/imagenes/2022/08/31/16619560089010.jpg' },
  ];

  constructor(private carritoService: CarritoComprasService) {}

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);
    alert('Producto agregado');
  }
}
