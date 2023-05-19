import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesNavegacionRecepcionComponent } from './botones-navegacion-recepcion.component';

describe('BotonesNavegacionRecepcionComponent', () => {
  let component: BotonesNavegacionRecepcionComponent;
  let fixture: ComponentFixture<BotonesNavegacionRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesNavegacionRecepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesNavegacionRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
