import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskDetailDialogComponent } from './view-task-detail-dialog.component';

describe('ViewTaskDetailDialogComponent', () => {
  let component: ViewTaskDetailDialogComponent;
  let fixture: ComponentFixture<ViewTaskDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
