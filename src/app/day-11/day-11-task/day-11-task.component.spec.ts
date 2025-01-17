import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day11TaskComponent } from './day-11-task.component';

describe('Day11TaskComponent', () => {
  let component: Day11TaskComponent;
  let fixture: ComponentFixture<Day11TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day11TaskComponent]
    });
    fixture = TestBed.createComponent(Day11TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
