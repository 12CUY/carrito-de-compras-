import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, OnDestroy {
  productos: any[] = [];
  filtro: string = '';
  minPrecio: number | null = null;
  maxPrecio: number | null = null;
  resultadoFiltrado: any[] = [];

  private productosSubscription: Subscription | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.productosSubscription = this.apiService.getDatos().subscribe((productos) => {
      this.productos = productos;
      this.filtrarProductos();
    });
  }

  ngOnDestroy(): void {
    if (this.productosSubscription) {
      this.productosSubscription.unsubscribe();
    }
  }

  buscar(): void {
    // Redireccionar a la página lista-productos con el término de búsqueda como parámetro
    this.router.navigate(['/lista-productos'], { queryParams: { filtro: this.filtro } });
  }
  
  filtrarPorPrecio(): void {
    this.filtrarProductos();
  }

  agregarAlCarrito(producto: any): void {
    // Aquí puedes llamar a un método del servicio de carrito de compras para agregar el producto al carrito
    // Ejemplo: this.carritoService.agregarProducto(producto);
    console.log('Producto agregado al carrito:', producto);
  }

  private filtrarProductos(): void {
    this.resultadoFiltrado = this.productos.filter((producto) => {
      const nombre = producto.nombre.toUpperCase();
      const filtro = this.filtro.toUpperCase();
      const cumpleFiltro = nombre.includes(filtro);
      const cumplePrecio =
        (this.minPrecio === null || producto.precio >= this.minPrecio) &&
        (this.maxPrecio === null || producto.precio <= this.maxPrecio);
      return cumpleFiltro && cumplePrecio;
    });
  }
}
