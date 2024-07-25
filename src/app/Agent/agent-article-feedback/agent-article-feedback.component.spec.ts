import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentArticleFeedbackComponent } from './agent-article-feedback.component';

describe('AgentArticleFeedbackComponent', () => {
  let component: AgentArticleFeedbackComponent;
  let fixture: ComponentFixture<AgentArticleFeedbackComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AgentArticleFeedbackComponent ]
    });
    fixture = TestBed.createComponent(AgentArticleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
