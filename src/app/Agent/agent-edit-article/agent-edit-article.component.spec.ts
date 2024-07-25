import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentEditArticleComponent } from './agent-edit-article.component';

describe('AgentEditArticleComponent', () => {
  let component: AgentEditArticleComponent;
  let fixture: ComponentFixture<AgentEditArticleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AgentEditArticleComponent ]
    });
    fixture = TestBed.createComponent(AgentEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
