import { TestBed } from '@angular/core/testing';

import { CarelloService } from './carello.service';

describe('CarelloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarelloService = TestBed.get(CarelloService);
    expect(service).toBeTruthy();
  });
});
