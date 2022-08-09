import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoDetalleComponent } from './trabajo-detalle.component';

describe('TrabajoDetalleComponent', () => {
  let component: TrabajoDetalleComponent;
  let fixture: ComponentFixture<TrabajoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
