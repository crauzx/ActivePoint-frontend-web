import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShareTaskComponent } from './view-share-task.component';

describe('ViewShareTaskComponent', () => {
  let component: ViewShareTaskComponent;
  let fixture: ComponentFixture<ViewShareTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShareTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShareTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
