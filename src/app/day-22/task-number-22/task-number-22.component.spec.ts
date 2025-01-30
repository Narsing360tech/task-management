import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNumber22Component } from './task-number-22.component';

describe('TaskNumber22Component', () => {
  let component: TaskNumber22Component;
  let fixture: ComponentFixture<TaskNumber22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskNumber22Component]
    });
    fixture = TestBed.createComponent(TaskNumber22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
