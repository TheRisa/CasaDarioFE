import { TestBed } from '@angular/core/testing';

import { CuriosityService } from './curiosity.service';

describe('CuriosityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuriosityService = TestBed.get(CuriosityService);
    expect(service).toBeTruthy();
  });
});
