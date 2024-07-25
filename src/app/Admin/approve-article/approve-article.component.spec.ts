import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveArticleComponent } from './approve-article.component';

describe('ApproveArticleComponent', () => {
  let component: ApproveArticleComponent;
  let fixture: ComponentFixture<ApproveArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveArticleComponent]
    });
    fixture = TestBed.createComponent(ApproveArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
