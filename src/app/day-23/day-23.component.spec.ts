import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day23Component } from './day-23.component';

describe('Day23Component', () => {
  let component: Day23Component;
  let fixture: ComponentFixture<Day23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day23Component]
    });
    fixture = TestBed.createComponent(Day23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
