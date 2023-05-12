import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClasificacionComponent } from './detalle-clasificacion.component';

describe('DetalleClasificacionComponent', () => {
  let component: DetalleClasificacionComponent;
  let fixture: ComponentFixture<DetalleClasificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleClasificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
