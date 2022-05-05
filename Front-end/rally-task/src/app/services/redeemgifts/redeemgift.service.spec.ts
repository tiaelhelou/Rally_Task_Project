import { TestBed } from '@angular/core/testing';

import { RedeemgiftService } from './redeemgift.service';

describe('RedeemgiftService', () => {
  let service: RedeemgiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedeemgiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
