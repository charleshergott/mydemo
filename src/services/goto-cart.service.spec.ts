import { TestBed } from '@angular/core/testing';

import { GotoCart } from '../services/goto-cart.service';

describe('GotoCartService', () => {
  let service: GotoCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotoCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
