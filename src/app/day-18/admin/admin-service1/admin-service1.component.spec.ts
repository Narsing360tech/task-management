import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminService1Component } from './admin-service1.component';

describe('AdminService1Component', () => {
  let component: AdminService1Component;
  let fixture: ComponentFixture<AdminService1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminService1Component]
    });
    fixture = TestBed.createComponent(AdminService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
