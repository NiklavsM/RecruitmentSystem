import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicityChartComponent } from './ethnicity-chart.component';
import {declarations} from '../../../appDeclarations';
import {imports} from '../../../appImports';
import {providers} from '../../../appProviders';

describe('EthnicityChartComponent', () => {
  let component: EthnicityChartComponent;
  let fixture: ComponentFixture<EthnicityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
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
