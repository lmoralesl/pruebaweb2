import { TestBed } from '@angular/core/testing';

import { CatalogoMotosService } from './catalogo-motos.service';

describe('CatalogoMotosService', () => {
  let service: CatalogoMotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoMotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
