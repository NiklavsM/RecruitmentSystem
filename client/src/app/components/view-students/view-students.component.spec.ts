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

describe('ViewStudentsComponent', () => {
  let component: ViewStudentsComponent;
  let fixture: ComponentFixture<ViewStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudentsComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, RouterModule.forRoot([]),
        MatSortModule, MatPaginatorModule, MatTableModule, MatNativeDateModule, NgSelectModule, MatCheckboxModule, NoopAnimationsModule],
      providers: [StudentService, Globals]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AdvancedOptionsSwitch enables advances filter', () => {
    component.advancedOptionsSwitch();
    expect(component.advancedOptions).toBe(true);
  })

});
