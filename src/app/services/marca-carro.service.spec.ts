import { TestBed } from '@angular/core/testing';

import { MarcaCarroService } from './marca-carro.service';

describe('MarcaCarroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcaCarroService = TestBed.get(MarcaCarroService);
    expect(service).toBeTruthy();
  });
});
