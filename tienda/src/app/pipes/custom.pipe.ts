import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(value: any, _args?: any): any {
    // Realiza la transformación deseada en los datos de entrada (value) y devuelve el resultado
    // Puedes utilizar args para proporcionar argumentos adicionales al pipe, si es necesario

    // Ejemplo de transformación: Convertir el valor a mayúsculas
    if (typeof value === 'string') {
      return value.toUpperCase();
    }

    return value;
  }
}
