import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStarRatingComponent } from './agent-star-rating.component';

describe('AgentStarRatingComponent', () => {
  let component: AgentStarRatingComponent;
  let fixture: ComponentFixture<AgentStarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentStarRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
