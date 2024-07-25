import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalArticleListComponent } from './pending-approval-article-list.component';

describe('PendingApprovalArticleListComponent', () => {
  let component: PendingApprovalArticleListComponent;
  let fixture: ComponentFixture<PendingApprovalArticleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingApprovalArticleListComponent]
    });
    fixture = TestBed.createComponent(PendingApprovalArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
