import { TestBed } from '@angular/core/testing';

import { UntilService } from './until.service';

describe('UntilService', () => {
  let service: UntilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UntilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
