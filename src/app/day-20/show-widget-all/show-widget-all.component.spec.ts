import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWidgetAllComponent } from './show-widget-all.component';

describe('ShowWidgetAllComponent', () => {
  let component: ShowWidgetAllComponent;
  let fixture: ComponentFixture<ShowWidgetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowWidgetAllComponent]
    });
    fixture = TestBed.createComponent(ShowWidgetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
