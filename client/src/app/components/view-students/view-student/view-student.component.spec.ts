import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewStudentComponent} from './view-student.component';
import {StudentService} from "../../../services/student.service";
import {RouterModule} from "@angular/router";
import {EditStudentComponent} from "../../edit-student/edit-student.component";
import {PersonalityChartComponent} from "./peronality-chart/personality-chart.component";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ChartsModule} from "ng2-charts";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {SendEmailComponent} from "./send-email/send-email.component";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {UniversalModalComponent} from "../../universal-modal/universal-modal.component";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {SettingsService} from "../../../services/settings.service";

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;
  let studentService: StudentService;
  let settingsService: SettingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudentComponent, EditStudentComponent, PersonalityChartComponent, SendEmailComponent, UniversalModalComponent, ConfirmModalComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ConfirmationPopoverModule, ReactiveFormsModule, NgSelectModule, ChartsModule, NgbModalModule],
      providers: [StudentService]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [SendEmailComponent, UniversalModalComponent, ConfirmModalComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.get(StudentService);
    spyOn(studentService, 'getStudent').and.returnValue(of({student: "Student"}));
    spyOn(studentService, 'getAttachments').and.returnValue(of({
      data: [], filter: () => {
      }
    }));
    settingsService = TestBed.get(SettingsService);
    spyOn(settingsService, 'getSettings').and.returnValue(of({companyName: "EastCompany"}))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('edit switch enables and disables edit mode', () => {
    component.editSwitch();
    expect(component.editMode).toBe(true);
    component.editSwitch();
    expect(component.editMode).toBe(false);
  });

  it('ngOnInit works', () => {
    component.ngOnInit();
  });

  it('Open email modal works', () => {
    component.openEmailModal();
  });

  it('Open delete modal works', () => {
    component.openDeleteModal();
  });

  it('Open save modal works', () => {
    component.openSaveModal("Success");
  });

  it('Delete attachments works', () => {
    component.ngOnInit();
    component.deleteAttachment("1");
  })

});
