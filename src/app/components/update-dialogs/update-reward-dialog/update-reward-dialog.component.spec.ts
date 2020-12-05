import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRewardDialogComponent } from './update-reward-dialog.component';

describe('UpdateRewardDialogComponent', () => {
  let component: UpdateRewardDialogComponent;
  let fixture: ComponentFixture<UpdateRewardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRewardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRewardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
