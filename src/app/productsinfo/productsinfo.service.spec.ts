import { TestBed } from '@angular/core/testing';

import { ProductsinfoService } from './productsinfo.service';

describe('ProductsinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsinfoService = TestBed.get(ProductsinfoService);
    expect(service).toBeTruthy();
  });
});
