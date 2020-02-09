import { TestBed } from '@angular/core/testing';

import { PolaganjePredmetaService } from './polaganje-predmeta.service';

describe('PolaganjePredmetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolaganjePredmetaService = TestBed.get(PolaganjePredmetaService);
    expect(service).toBeTruthy();
  });
});
