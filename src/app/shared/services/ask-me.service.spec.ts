import { TestBed } from '@angular/core/testing';

import { AskMeService } from './ask-me.service';

describe('AskMeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskMeService = TestBed.get(AskMeService);
    expect(service).toBeTruthy();
  });
});
