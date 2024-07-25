import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditPasswordComponent } from './customer-edit-password.component';

describe('CustomerEditPasswordComponent', () => {
  let component: CustomerEditPasswordComponent;
  let fixture: ComponentFixture<CustomerEditPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
