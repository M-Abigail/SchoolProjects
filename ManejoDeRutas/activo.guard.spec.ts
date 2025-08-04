import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activoGuard } from './activo.guard';

describe('activoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
