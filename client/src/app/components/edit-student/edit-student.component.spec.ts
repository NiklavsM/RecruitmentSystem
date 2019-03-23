import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditStudentComponent} from './edit-student.component';
import {StudentService} from "../../services/student.service";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Globals} from "../../globals";
import {NgSelectModule} from "@ng-select/ng-select";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {UniversalModalComponent} from "../universal-modal/universal-modal.component";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {SimpleChange} from "@angular/core";
import {of} from "rxjs";

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;
  let studentService: StudentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditStudentComponent, UniversalModalComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, NgSelectModule, NgbModalModule],
      providers: [Globals, StudentService]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [UniversalModalComponent],
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.get(StudentService);
    spyOn(studentService, 'createStudent').and.returnValue(of({}))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Submit registration should change submit to true', () => {
    component.submitRegistration();
    expect(component.submitted).toEqual(true);
  });

  it('Submit valid form', () => {
    component.student = {
      firstName: "Name",
      lastName: "Last Name",
      email: "email@email.com",
      university: "University",
      gradYear: "11/11/2019",
      course: "Computer Science"
    };
    component.clearOnSubmit = true;
    component.ngOnInit();
    component.studentForm = new FormGroup({});
    component.submitRegistration();
    expect(component.submitted).toEqual(true);
  });

  it('Modal open works', () => {
    component.openModal("Modals")
  });

  it('NgOnChange works', () => {
    component.ngOnChanges({editMode: new SimpleChange(true, false, true)});
  });

});
