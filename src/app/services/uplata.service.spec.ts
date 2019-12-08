import { TestBed } from '@angular/core/testing';

import { UplataService } from './uplata.service';

describe('UplataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UplataService = TestBed.get(UplataService);
    expect(service).toBeTruthy();
  });
});
