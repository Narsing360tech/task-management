import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponantComponent } from './admin-componant.component';

describe('AdminComponantComponent', () => {
  let component: AdminComponantComponent;
  let fixture: ComponentFixture<AdminComponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponantComponent]
    });
    fixture = TestBed.createComponent(AdminComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
