import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AgentMonthChartComponent } from './agent-month-chart.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AgentMonthChartComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AgentMonthChartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chartDemo'`, () => {
    const fixture = TestBed.createComponent(AgentMonthChartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chartDemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AgentMonthChartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('chartDemo app is running!');
  });
});