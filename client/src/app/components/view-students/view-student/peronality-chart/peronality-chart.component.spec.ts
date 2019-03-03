import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronalityChartComponent } from './peronality-chart.component';
import {declarations} from "../../../../appDeclarations";
import {imports} from "../../../../appImports";
import {providers} from "../../../../appProviders";

describe('PeronalityChartComponent', () => {
  let component: PeronalityChartComponent;
  let fixture: ComponentFixture<PeronalityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
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
