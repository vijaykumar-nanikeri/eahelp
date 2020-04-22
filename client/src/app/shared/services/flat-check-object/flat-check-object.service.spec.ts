import { TestBed } from '@angular/core/testing';

import { FlatCheckObjectService } from './flat-check-object.service';

describe('FlatCheckObjectService', () => {
  let service: FlatCheckObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatCheckObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
