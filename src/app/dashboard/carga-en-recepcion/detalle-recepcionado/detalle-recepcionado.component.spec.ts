import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRecepcionadoComponent } from './detalle-recepcionado.component';

describe('DetalleRecepcionadoComponent', () => {
  let component: DetalleRecepcionadoComponent;
  let fixture: ComponentFixture<DetalleRecepcionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRecepcionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRecepcionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
