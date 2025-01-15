import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day9TaskComponent } from './day-9-task.component';

describe('Day9TaskComponent', () => {
  let component: Day9TaskComponent;
  let fixture: ComponentFixture<Day9TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day9TaskComponent]
    });
    fixture = TestBed.createComponent(Day9TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
