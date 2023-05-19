import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detalle-clasificacion',
  templateUrl: './detalle-clasificacion.component.html',
  styleUrls: ['./detalle-clasificacion.component.css']
})
export class DetalleClasificacionComponent {


  constructor(private router: Router) {}

  onItemClick(type: string, index: number) {
    this.router.navigate([`/dashboard/carga-en-recepcion/${type}/${index}`]);
  }
  
}
