import { TestBed } from '@angular/core/testing';

import { DisplayredeemService } from './displayredeem.service';

describe('DisplayredeemService', () => {
  let service: DisplayredeemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayredeemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
