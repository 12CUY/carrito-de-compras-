import { Component } from '@angular/core';
import { CarritoComprasService } from '../../carrito-compras.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  productos = [
    { 
      nombre: 'Platos de cocina coreana 1', 
      precio: 15, 
      imagen: 'https://colombianabroad.com/wp-content/uploads/comida-coreana-gimbap-1024x768.jpg',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eleifend massa, sit amet gravida neque rutrum ut.'
    },
    { 
      nombre: 'Platos de cocina coreana 2', 
      precio: 20, 
      imagen: 'https://colombianabroad.com/wp-content/uploads/comida-coreana-gimbap-1024x768.jpg',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eleifend massa, sit amet gravida neque rutrum ut.'
    },
    { 
      nombre: 'Platos de cocina coreana 3', 
      precio: 20, 
      imagen: 'https://colombianabroad.com/wp-content/uploads/comida-coreana-gimbap-1024x768.jpg',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eleifend massa, sit amet gravida neque rutrum ut.'
    },
    { 
      nombre: 'Platos de cocina coreana 4', 
      precio: 10, 
      imagen: 'https://colombianabroad.com/wp-content/uploads/comida-coreana-gimbap-1024x768.jpg',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eleifend massa, sit amet gravida neque rutrum ut.'
    },
    // Resto de los objetos de producto
  ];
  constructor(private carritoService: CarritoComprasService) {}
// mingun -el valor gg
  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);
    alert('Producto agregado');
  }
}
