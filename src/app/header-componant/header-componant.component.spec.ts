import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponantComponent } from './header-componant.component';

describe('HeaderComponantComponent', () => {
  let component: HeaderComponantComponent;
  let fixture: ComponentFixture<HeaderComponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponantComponent]
    });
    fixture = TestBed.createComponent(HeaderComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
