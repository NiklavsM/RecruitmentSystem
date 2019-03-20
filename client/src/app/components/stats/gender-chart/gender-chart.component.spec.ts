import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenderChartComponent} from './gender-chart.component';
import {ChartsModule} from "ng2-charts";
import {StatsService} from "../../../services/stats.service";
import {Globals} from "../../../globals";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('GenderChartComponent', () => {
  let component: GenderChartComponent;
  let fixture: ComponentFixture<GenderChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenderChartComponent],
      imports: [HttpClientTestingModule, ChartsModule],
      providers: [StatsService, Globals]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
