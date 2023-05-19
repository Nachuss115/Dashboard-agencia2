import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-clasificacion-reparto',
  templateUrl: './detalle-clasificacion-reparto.component.html',
  styleUrls: ['./detalle-clasificacion-reparto.component.css']
})
export class DetalleClasificacionRepartoComponent {


  constructor(private router: Router) {}

  onItemClick(type: string, index: number) {
    this.router.navigate([`/dashboard/carga-en-recepcion/${type}/${index}`]);
  }
  


}
