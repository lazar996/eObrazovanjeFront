import { TestBed } from '@angular/core/testing';

import { PohadjanjeListService } from './pohadjanje-list.service';

describe('PohadjanjeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PohadjanjeListService = TestBed.get(PohadjanjeListService);
    expect(service).toBeTruthy();
  });
});
