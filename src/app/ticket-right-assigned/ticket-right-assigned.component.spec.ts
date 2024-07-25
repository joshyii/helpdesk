import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRightAssignedComponent } from './ticket-right-assigned.component';

describe('TicketRightAssignedComponent', () => {
  let component: TicketRightAssignedComponent;
  let fixture: ComponentFixture<TicketRightAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketRightAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRightAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
