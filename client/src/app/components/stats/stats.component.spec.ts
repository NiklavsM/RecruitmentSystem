import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatsComponent} from './stats.component';
import {SignupGraphComponent} from "./signup-graph/signup-graph.component";
import {GenderChartComponent} from "./gender-chart/gender-chart.component";
import {EthnicityChartComponent} from "./ethnicity-chart/ethnicity-chart.component";
import {ChartsModule} from "ng2-charts";
import {StatsService} from "../../services/stats.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Globals} from "../../globals";

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatsComponent, SignupGraphComponent, GenderChartComponent, EthnicityChartComponent],
      imports: [HttpClientTestingModule, ChartsModule],
      providers: [StatsService, Globals]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
