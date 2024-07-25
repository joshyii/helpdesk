import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSendReviewFormComponent } from './agent-send-review-form.component';

describe('AgentSendReviewFormComponent', () => {
  let component: AgentSendReviewFormComponent;
  let fixture: ComponentFixture<AgentSendReviewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentSendReviewFormComponent]
    });
    fixture = TestBed.createComponent(AgentSendReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
