import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaMotosComponent } from './galeria-motos.component';

describe('GaleriaMotosComponent', () => {
  let component: GaleriaMotosComponent;
  let fixture: ComponentFixture<GaleriaMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaMotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
