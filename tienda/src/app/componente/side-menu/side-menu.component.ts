import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  // Definir los enlaces del menú
  menuItems = [
    { title: 'Inicio', icon: 'home', link: '/inicio' },
    { title: 'Caja', icon: 'bell', link: '/carrito-compras' },
    { title: 'Platos', icon: 'message',  link: '/lista-productos'},
    // Agrega más enlaces según sea necesario
  ];
}
