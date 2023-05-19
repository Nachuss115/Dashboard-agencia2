import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detalle-recepcionado',
  templateUrl: './detalle-recepcionado.component.html',
  styleUrls: ['./detalle-recepcionado.component.css']
})
export class DetalleRecepcionadoComponent {

  constructor(private router: Router) { }

  onItemClick(type: string, index: number) {
    this.router.navigate([`/dashboard/carga-en-recepcion/${type}/${index}`]);
  }
  
  



}
