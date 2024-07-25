import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewArticleComponent } from './customer-view-article.component';

describe('CustomerViewArticleComponent', () => {
  let component: CustomerViewArticleComponent;
  let fixture: ComponentFixture<CustomerViewArticleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CustomerViewArticleComponent ]
    });
    fixture = TestBed.createComponent(CustomerViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
