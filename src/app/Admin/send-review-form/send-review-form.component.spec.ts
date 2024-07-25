import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReviewFormComponent } from './send-review-form.component';

describe('PendingApprovalArticleListComponent', () => {
  let component: SendReviewFormComponent;
  let fixture: ComponentFixture<SendReviewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendReviewFormComponent]
    });
    fixture = TestBed.createComponent(SendReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
