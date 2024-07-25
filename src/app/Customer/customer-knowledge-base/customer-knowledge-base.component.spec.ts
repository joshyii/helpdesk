import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerKnowledgeBaseComponent } from './customer-knowledge-base.component';

describe('CustomerKnowledgeBaseComponent', () => {
  let component: CustomerKnowledgeBaseComponent;
  let fixture: ComponentFixture<CustomerKnowledgeBaseComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CustomerKnowledgeBaseComponent ]
    });
    fixture = TestBed.createComponent(CustomerKnowledgeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
