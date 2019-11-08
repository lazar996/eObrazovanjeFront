import { TestBed } from '@angular/core/testing';

import { UceniciService } from './ucenici.service';

describe('UceniciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UceniciService = TestBed.get(UceniciService);
    expect(service).toBeTruthy();
  });
});
