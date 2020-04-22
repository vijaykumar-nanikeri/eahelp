import { TestBed } from '@angular/core/testing';

import { IsArrayDataService } from './is-array-data.service';

describe('IsArrayDataService', () => {
  let service: IsArrayDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsArrayDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
