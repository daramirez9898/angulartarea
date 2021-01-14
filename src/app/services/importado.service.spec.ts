import { TestBed } from '@angular/core/testing';

import { ImportadoService } from './importado.service';

describe('ImportadoService', () => {
  let service: ImportadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
