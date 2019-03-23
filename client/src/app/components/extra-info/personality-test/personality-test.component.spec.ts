import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalityTestComponent} from './personality-test.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentService} from '../../../services/student.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {of} from 'rxjs';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {UniversalModalComponent} from '../../universal-modal/universal-modal.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

describe('PersonalityTestComponent', () => {
  let component: PersonalityTestComponent;
  let fixture: ComponentFixture<PersonalityTestComponent>;
  let studentService: StudentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalityTestComponent, UniversalModalComponent],
      imports: [HttpClientModule, RouterModule.forRoot([]), ReactiveFormsModule, NgbModalModule],
      providers: [StudentService]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [UniversalModalComponent],
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.get(StudentService);
    spyOn(studentService, 'uploadSurvey').and.returnValue(of({}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Personality test submit works', () => {
    component.submitSurvey();
  });

});
