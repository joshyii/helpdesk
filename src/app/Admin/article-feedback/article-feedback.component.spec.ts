import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeedbackComponent } from './article-feedback.component';

describe('PendingApprovalArticleListComponent', () => {
  let component: ArticleFeedbackComponent;
  let fixture: ComponentFixture<ArticleFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFeedbackComponent]
    });
    fixture = TestBed.createComponent(ArticleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
