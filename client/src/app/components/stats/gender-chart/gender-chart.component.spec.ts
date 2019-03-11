import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderChartComponent } from './gender-chart.component';
import {declarations} from '../../../appDeclarations';
import {imports} from '../../../appImports';
import {providers} from '../../../appProviders';

describe('GenderChartComponent', () => {
  let component: GenderChartComponent;
  let fixture: ComponentFixture<GenderChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
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
