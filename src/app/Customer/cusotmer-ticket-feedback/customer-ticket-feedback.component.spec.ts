import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketFeedbackComponent } from './customer-ticket-feedback.component';

describe('CustomerTicketFeedbackComponent', () => {
  let component: CustomerTicketFeedbackComponent;
  let fixture: ComponentFixture<CustomerTicketFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTicketFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
