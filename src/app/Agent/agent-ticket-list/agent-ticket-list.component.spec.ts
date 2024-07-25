import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTicketListComponent } from './agent-ticket-list.component';

describe('AgentTicketListComponent', () => {
  let component: AgentTicketListComponent;
  let fixture: ComponentFixture<AgentTicketListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentTicketListComponent]
    });
    fixture = TestBed.createComponent(AgentTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
