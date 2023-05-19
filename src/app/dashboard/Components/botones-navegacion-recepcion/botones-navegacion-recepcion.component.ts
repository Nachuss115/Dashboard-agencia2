import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-botones-navegacion-recepcion',
  templateUrl: './botones-navegacion-recepcion.component.html',
  styleUrls: ['./botones-navegacion-recepcion.component.css']
})
export class BotonesNavegacionRecepcionComponent implements OnInit {
  @Output() clickBoton = new EventEmitter<{type: string, index: number}>();

  selectedButton: number | null = null;
  buttonRoutes: string[] = ['recepcionado', 'clasificacion', 'clasificacion-reparto'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const root = this.route.root;
      let child = root.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data['buttonIndex']) {
          this.selectedButton = child.snapshot.data['buttonIndex'];
          console.log(`Button index: ${this.selectedButton}`);
          break;
        } else {
          child = null;
        }
      }
    });
    
  }

  onItemClick(type: string, index: number) {
    this.selectedButton = index;
    this.clickBoton.emit({type, index});
  }
}
