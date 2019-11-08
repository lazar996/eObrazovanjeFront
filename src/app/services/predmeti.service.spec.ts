import { TestBed } from '@angular/core/testing';

import { PredmetiService } from './predmeti.service';

describe('PredmetiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredmetiService = TestBed.get(PredmetiService);
    expect(service).toBeTruthy();
  });
});
