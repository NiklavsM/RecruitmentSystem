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

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudentComponent, EditStudentComponent, PersonalityChartComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ConfirmationPopoverModule, ReactiveFormsModule, NgSelectModule, ChartsModule],
      providers: [StudentService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('edit switch enables and disables edit mode', () => {
    component.editSwitch();
    expect(component.editMode).toBe(true);
    component.editSwitch();
    expect(component.editMode).toBe(false);
  })

});
