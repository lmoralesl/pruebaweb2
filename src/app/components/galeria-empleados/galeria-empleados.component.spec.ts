import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaEmpleadosComponent } from './galeria-empleados.component';

describe('GaleriaEmpleadosComponent', () => {
  let component: GaleriaEmpleadosComponent;
  let fixture: ComponentFixture<GaleriaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
