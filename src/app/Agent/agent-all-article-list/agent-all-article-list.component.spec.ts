import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAllArticleListComponent } from './agent-all-article-list.component';

describe('AgentAllArticleListComponent', () => {
  let component: AgentAllArticleListComponent;
  let fixture: ComponentFixture<AgentAllArticleListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AgentAllArticleListComponent ]
    });
    fixture = TestBed.createComponent(AgentAllArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
