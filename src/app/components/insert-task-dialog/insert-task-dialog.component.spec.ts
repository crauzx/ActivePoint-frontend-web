import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTaskDialogComponent } from './insert-task-dialog.component';

describe('InsertTaskDialogComponent', () => {
  let component: InsertTaskDialogComponent;
  let fixture: ComponentFixture<InsertTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
