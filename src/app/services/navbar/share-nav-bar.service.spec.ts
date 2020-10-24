import { TestBed } from '@angular/core/testing';

import { ShareNavBarService } from './share-nav-bar.service';

describe('ShareNavBarService', () => {
  let service: ShareNavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareNavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
