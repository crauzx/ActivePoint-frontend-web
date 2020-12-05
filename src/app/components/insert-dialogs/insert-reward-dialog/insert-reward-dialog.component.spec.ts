import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRewardDialogComponent } from './insert-reward-dialog.component';

describe('InsertRewardDialogComponent', () => {
  let component: InsertRewardDialogComponent;
  let fixture: ComponentFixture<InsertRewardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRewardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRewardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
