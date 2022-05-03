import { TestBed } from '@angular/core/testing';

import { DisplayleadboardService } from './displayleadboard.service';

describe('DisplayleadboardService', () => {
  let service: DisplayleadboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayleadboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
