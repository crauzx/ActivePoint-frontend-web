import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRewardDetailDialogComponent } from './view-reward-detail-dialog.component';

describe('ViewRewardDetailDialogComponent', () => {
  let component: ViewRewardDetailDialogComponent;
  let fixture: ComponentFixture<ViewRewardDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRewardDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRewardDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
