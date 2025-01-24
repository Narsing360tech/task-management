import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminService2Component } from './admin-service2.component';

describe('AdminService2Component', () => {
  let component: AdminService2Component;
  let fixture: ComponentFixture<AdminService2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminService2Component]
    });
    fixture = TestBed.createComponent(AdminService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
