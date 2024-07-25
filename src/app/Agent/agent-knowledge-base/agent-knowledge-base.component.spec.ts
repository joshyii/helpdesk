import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentKnowledgeBaseComponent } from './agent-knowledge-base.component';

describe('AgentKnowledgeBaseComponent', () => {
  let component: AgentKnowledgeBaseComponent;
  let fixture: ComponentFixture<AgentKnowledgeBaseComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AgentKnowledgeBaseComponent ]
    });
    fixture = TestBed.createComponent(AgentKnowledgeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
