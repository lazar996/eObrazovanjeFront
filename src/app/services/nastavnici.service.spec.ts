import { TestBed } from '@angular/core/testing';

import { NastavniciService } from './nastavnici.service';

describe('NastavniciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NastavniciService = TestBed.get(NastavniciService);
    expect(service).toBeTruthy();
  });
});
