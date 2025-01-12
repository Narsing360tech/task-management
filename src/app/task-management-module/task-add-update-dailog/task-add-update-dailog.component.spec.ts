import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddUpdateDailogComponent } from './task-add-update-dailog.component';

describe('TaskAddUpdateDailogComponent', () => {
  let component: TaskAddUpdateDailogComponent;
  let fixture: ComponentFixture<TaskAddUpdateDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAddUpdateDailogComponent]
    });
    fixture = TestBed.createComponent(TaskAddUpdateDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
