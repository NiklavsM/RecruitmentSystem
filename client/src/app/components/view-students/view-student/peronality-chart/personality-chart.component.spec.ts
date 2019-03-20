import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalityChartComponent} from './personality-chart.component';
import {StudentService} from "../../../../services/student.service";
import {ChartsModule} from "ng2-charts";
import {PersonalityTraitDescriptionComponent} from "./personality-trait-description/personality-trait-description.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PersonalityChartComponent', () => {
  let component: PersonalityChartComponent;
  let fixture: ComponentFixture<PersonalityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalityChartComponent, PersonalityTraitDescriptionComponent],
      imports: [HttpClientTestingModule, ChartsModule],
      providers: [StudentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
