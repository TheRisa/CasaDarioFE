import { TestBed } from '@angular/core/testing';

import { BanListService } from './ban-list.service';

describe('BanListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanListService = TestBed.get(BanListService);
    expect(service).toBeTruthy();
  });
});
