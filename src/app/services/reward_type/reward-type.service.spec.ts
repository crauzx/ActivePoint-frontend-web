import { TestBed } from '@angular/core/testing';

import { RewardTypeService } from './reward-type.service';

describe('RewardTypeService', () => {
  let service: RewardTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
