import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenderChartComponent} from './gender-chart.component';
import {ChartsModule} from 'ng2-charts';
import {StatsService} from '../../../services/stats.service';
import {Globals} from '../../../globals';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('GenderChartComponent', () => {
  let component: GenderChartComponent;
  let fixture: ComponentFixture<GenderChartComponent>;
  let statsService: StatsService;

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
    statsService = TestBed.get(StatsService);
    spyOn(statsService, 'getGenderStats').and.returnValue(of({data: 'data'}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit works', () => {
    component.ngOnInit();
  });
});
