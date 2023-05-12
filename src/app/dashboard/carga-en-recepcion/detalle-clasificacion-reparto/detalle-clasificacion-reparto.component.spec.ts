import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClasificacionRepartoComponent } from './detalle-clasificacion-reparto.component';

describe('DetalleClasificacionRepartoComponent', () => {
  let component: DetalleClasificacionRepartoComponent;
  let fixture: ComponentFixture<DetalleClasificacionRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleClasificacionRepartoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClasificacionRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
