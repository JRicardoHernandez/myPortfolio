import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajoComponent } from './lista-trabajo.component';

describe('ListaTrabajoComponent', () => {
  let component: ListaTrabajoComponent;
  let fixture: ComponentFixture<ListaTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
