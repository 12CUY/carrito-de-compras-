import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CarritoComprasComponent } from './componente/carrito-compras/carrito-compras.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaProductosComponent } from './componente/lista-productos/lista-productos.component';
import { ApiService } from './services/api.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CustomDirective } from './directives/custom.directive';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FooeterComponent } from './componente/fooeter/fooeter.component';
import { SideMenuComponent } from './componente/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComprasComponent,
    ListaProductosComponent,
    TruncatePipe,
    CustomDirective,
    InicioComponent,
    FooeterComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
