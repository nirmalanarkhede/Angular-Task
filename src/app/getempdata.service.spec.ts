import { TestBed } from '@angular/core/testing';

import { GetempdataService } from './getempdata.service';

describe('GetempdataService', () => {
  let service: GetempdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetempdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
