import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponantComponent } from './task-list-componant.component';

describe('TaskListComponantComponent', () => {
  let component: TaskListComponantComponent;
  let fixture: ComponentFixture<TaskListComponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponantComponent]
    });
    fixture = TestBed.createComponent(TaskListComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
