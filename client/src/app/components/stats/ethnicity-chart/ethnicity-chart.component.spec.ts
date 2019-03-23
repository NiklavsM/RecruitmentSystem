import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EthnicityChartComponent} from './ethnicity-chart.component';
import {ChartsModule} from 'ng2-charts';
import {StatsService} from '../../../services/stats.service';
import {Globals} from '../../../globals';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('EthnicityChartComponent', () => {
  let component: EthnicityChartComponent;
  let fixture: ComponentFixture<EthnicityChartComponent>;
  let statsService: StatsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EthnicityChartComponent],
      imports: [HttpClientTestingModule, ChartsModule],
      providers: [StatsService, Globals]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    statsService = TestBed.get(StatsService);
    spyOn(statsService, 'getEthnicityStats').and.returnValue(of({data: 'data'}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit works', () => {
    component.ngOnInit();
  });
});
