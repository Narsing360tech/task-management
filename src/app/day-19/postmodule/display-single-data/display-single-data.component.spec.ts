import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleDataComponent } from './display-single-data.component';

describe('DisplaySingleDataComponent', () => {
  let component: DisplaySingleDataComponent;
  let fixture: ComponentFixture<DisplaySingleDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySingleDataComponent]
    });
    fixture = TestBed.createComponent(DisplaySingleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
