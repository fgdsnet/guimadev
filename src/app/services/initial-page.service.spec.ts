import { TestBed } from '@angular/core/testing';

import { InitialPageService } from './initial-page.service';

describe('InitialPageService', () => {
  let service: InitialPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
