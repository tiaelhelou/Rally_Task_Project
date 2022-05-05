import { TestBed } from '@angular/core/testing';

import { DonetaskService } from './donetask.service';

describe('DonetaskService', () => {
  let service: DonetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
