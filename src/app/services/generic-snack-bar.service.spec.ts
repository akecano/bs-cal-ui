import { TestBed } from '@angular/core/testing';

import { GenericSnackBarService } from './generic-snack-bar.service';

describe('GenericSnackBarService', () => {
  let service: GenericSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
