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
    { title: 'Notificaciones', icon: 'bell', link: '/notifications' },
    { title: 'Mensajes', icon: 'message', link: '/messages' },
    // Agrega más enlaces según sea necesario
  ];
}
