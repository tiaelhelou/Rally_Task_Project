import { TestBed } from '@angular/core/testing';

import { DisplaytaskService } from './displaytask.service';

describe('DisplaytaskService', () => {
  let service: DisplaytaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaytaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
