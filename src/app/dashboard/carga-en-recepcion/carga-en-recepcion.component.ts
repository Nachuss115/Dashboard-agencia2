import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-carga-en-recepcion',
  templateUrl: './carga-en-recepcion.component.html',
  styleUrls: ['./carga-en-recepcion.component.css']
})

export class CargaEnRecepcionComponent implements OnInit {
  recepcionados: any[] = [
    // Tus elementos de "Recepcionado" aquí
  ];

  clasificaciones: any[] = [
    // Tus elementos de "Clasificación" aquí
  ];

  clasificacionesReparto: any[] = [
    // Tus elementos de "Clasificación Reparto" aquí
  ];


  ngOnInit(): void {}

  constructor(private router: Router) {}
  

  onItemClick(type: string, index: number) {
    this.selectedItemId = index;
    this.router.navigate([`dashboard/carga-en-recepcion/${type}/${index}`]);
  }
  
  
  




  selectedItemId: number | null = null;
/*
  onItemClick(itemId: number): void {
    this.selectedItemId = itemId;
    this.router.navigate(['/ruta-al-componente-detalle', itemId]);
  }
*/



}


