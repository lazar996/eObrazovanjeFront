import { TestBed } from '@angular/core/testing';

import { DokumentaService } from './dokumenta.service';

describe('DokumentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DokumentaService = TestBed.get(DokumentaService);
    expect(service).toBeTruthy();
  });
});
