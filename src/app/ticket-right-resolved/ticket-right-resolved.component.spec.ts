import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRightResolvedComponent } from './ticket-right-resolved.component';

describe('TicketRightResolvedComponent', () => {
  let component: TicketRightResolvedComponent;
  let fixture: ComponentFixture<TicketRightResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketRightResolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRightResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
