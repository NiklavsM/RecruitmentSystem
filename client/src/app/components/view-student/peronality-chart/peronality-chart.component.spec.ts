import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronalityChartComponent } from './peronality-chart.component';

describe('PeronalityChartComponent', () => {
  let component: PeronalityChartComponent;
  let fixture: ComponentFixture<PeronalityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeronalityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeronalityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
