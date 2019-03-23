import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ViewStudentsComponent} from './view-students.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {Globals} from "../../globals";
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import {NgSelectModule} from "@ng-select/ng-select";
import {RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {of} from "rxjs";
import {ConfirmModalComponent} from "./confirm-modal/confirm-modal.component";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('ViewStudentsComponent', () => {
  let component: ViewStudentsComponent;
  let fixture: ComponentFixture<ViewStudentsComponent>;
  let studentService: StudentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudentsComponent, ConfirmModalComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, RouterModule.forRoot([]),
        MatSortModule, MatPaginatorModule, MatTableModule, MatNativeDateModule, NgSelectModule, MatCheckboxModule, NoopAnimationsModule, NgbModalModule],
      providers: [StudentService, Globals]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ConfirmModalComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    studentService = TestBed.get(StudentService);
    spyOn(studentService, 'getStudents').and.returnValue(of([]));
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ApplySearch should work', () => {
    component.applySearch("SearchString");
  });

  it('MasterToggle should work', () => {
    component.masterToggle();
  });

  it('Advanced search should work', () => {
    component.advancedSearch();
  });

  it('TryToDelete', () => {
    component.tryToDelete();
  });

  it('AdvancedOptionsSwitch enables advances filter', () => {
    component.advancedOptionsSwitch();
    expect(component.advancedOptions).toBe(true);
  })

});
