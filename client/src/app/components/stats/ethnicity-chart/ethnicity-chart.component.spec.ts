import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicityChartComponent } from './ethnicity-chart.component';

describe('EthnicityChartComponent', () => {
  let component: EthnicityChartComponent;
  let fixture: ComponentFixture<EthnicityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthnicityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
