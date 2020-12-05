import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRewardDialogComponent } from './delete-reward-dialog.component';

describe('DeleteRewardDialogComponent', () => {
  let component: DeleteRewardDialogComponent;
  let fixture: ComponentFixture<DeleteRewardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRewardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRewardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
