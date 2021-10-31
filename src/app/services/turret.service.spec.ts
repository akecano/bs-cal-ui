import { TestBed } from '@angular/core/testing';

import { TurretService } from './turret.service';

describe('TurretService', () => {
  let service: TurretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
