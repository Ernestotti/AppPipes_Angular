import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'ernesto';
  nombreUpper: string = 'ERNESTO';
  nombreCompleto: string = 'eRnEsto forNas';

  fecha: Date = new Date(); // el día de hoy

}
