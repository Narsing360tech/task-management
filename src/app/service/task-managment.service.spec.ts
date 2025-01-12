import { TestBed } from '@angular/core/testing';

import { TaskManagmentService } from './task-managment.service';

describe('TaskManagmentService', () => {
  let service: TaskManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
