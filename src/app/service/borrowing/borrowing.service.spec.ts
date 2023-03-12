import { TestBed } from '@angular/core/testing';

import { BorrowingService } from './borrowing.service';

describe('BorrowingService', () => {
  let service: BorrowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
