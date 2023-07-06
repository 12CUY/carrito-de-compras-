import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComprasComponent } from './componente/carrito-compras/carrito-compras.component';
import { ListaProductosComponent } from './componente/lista-productos/lista-productos.component';
import { InicioComponent } from './componente/inicio/inicio.component';
const routes: Routes = [
  { path: 'carrito-compras', component: CarritoComprasComponent },
  { path: 'lista-productos', component: ListaProductosComponent },
  { path: 'inicio', component: InicioComponent  },

  // Otros componentes y rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
