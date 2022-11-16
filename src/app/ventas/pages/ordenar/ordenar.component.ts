import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  
  constructor( ) { }
  
  ngOnInit(): void {
  }
  
  cambio() {
    this.enMayusculas = !this.enMayusculas
  }
  
}
