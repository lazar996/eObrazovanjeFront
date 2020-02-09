import { TestBed } from '@angular/core/testing';

import { PohadjanjepredmetaService } from './pohadjanjepredmeta.service';

describe('PohadjanjepredmetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PohadjanjepredmetaService = TestBed.get(PohadjanjepredmetaService);
    expect(service).toBeTruthy();
  });
});
