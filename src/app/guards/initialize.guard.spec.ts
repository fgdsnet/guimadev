import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { initializeGuard } from './initialize.guard';

describe('initializeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => initializeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
