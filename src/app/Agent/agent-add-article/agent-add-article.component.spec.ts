import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddArticleComponent } from './agent-add-article.component';

describe('AgentAddArticleComponent', () => {
  let component: AgentAddArticleComponent;
  let fixture: ComponentFixture<AgentAddArticleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AgentAddArticleComponent ]
    });
    fixture = TestBed.createComponent(AgentAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
