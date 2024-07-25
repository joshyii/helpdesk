import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewArticleComponent } from './agent-view-article.component';

describe('AgentViewArticleComponent', () => {
  let component: AgentViewArticleComponent;
  let fixture: ComponentFixture<AgentViewArticleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AgentViewArticleComponent ]
    });
    fixture = TestBed.createComponent(AgentViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
