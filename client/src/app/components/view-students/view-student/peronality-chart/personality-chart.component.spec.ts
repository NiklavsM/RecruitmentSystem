import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalityChartComponent} from './personality-chart.component';
import {StudentService} from '../../../../services/student.service';
import {ChartsModule} from 'ng2-charts';
import {PersonalityTraitDescriptionComponent} from './personality-trait-description/personality-trait-description.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('PersonalityChartComponent', () => {
  let component: PersonalityChartComponent;
  let fixture: ComponentFixture<PersonalityChartComponent>;
  let studentService: StudentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalityChartComponent, PersonalityTraitDescriptionComponent],
      imports: [HttpClientTestingModule, ChartsModule, NgbModalModule],
      providers: [StudentService]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PersonalityTraitDescriptionComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.get(StudentService);
    spyOn(studentService, 'getSurvey').and.returnValue(of({chart: '1'}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit works', () => {
    component.ngOnInit();
  });

  it('OpenInfo method works', () => {
    component.openInfo();
  });

});
