import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtiarMotoComponent } from './edtiar-moto.component';

describe('EdtiarMotoComponent', () => {
  let component: EdtiarMotoComponent;
  let fixture: ComponentFixture<EdtiarMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdtiarMotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdtiarMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
