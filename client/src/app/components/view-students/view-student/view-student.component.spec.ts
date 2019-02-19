import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewStudentComponent} from './view-student.component';
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ChartsModule} from "ng2-charts";
import {APP_BASE_HREF} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppComponent} from "../../../app.component";
import {LinkedinComponent} from "../../linkedin/linkedin.component";
import {CallbackComponent} from "../../callback/callback.component";
import {HomeComponent} from "../../home/home.component";
import {AddStudentComponent} from "../../add-student/add-student.component";
import {ViewStudentsComponent} from "../view-students.component";
import {AdminComponent} from "../../admin/admin.component";
import {NavbarComponent} from "../../navbar/navbar.component";
import {ProfileComponent} from "../../profile/profile.component";
import {SendEmailComponent} from "../../send-email/send-email.component";
import {EditStudentComponent} from "../../edit-student/edit-student.component";
import {ConfirmModalComponent} from "../../confirm-modal/confirm-modal.component";
import {SignupGraphComponent} from "../../stats/signup-graph/signup-graph.component";
import {GenderChartComponent} from "../../stats/gender-chart/gender-chart.component";
import {StatsComponent} from "../../stats/stats.component";
import {StudentService} from "../../../services/student.service";
import {AuthService} from "../../../services/auth.service";
import {AuthGuard} from "../../../services/auth.guard";
import {AppRoutingModule} from "../../../app-routing.module";

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModalModule,
        MatDatepickerModule,
        NoopAnimationsModule,
        MatNativeDateModule,
        ChartsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
      ],
      declarations: [
        AppComponent,
        LinkedinComponent,
        CallbackComponent,
        HomeComponent,
        AddStudentComponent,
        ViewStudentsComponent,
        AdminComponent,
        NavbarComponent,
        ProfileComponent,
        ViewStudentComponent,
        SendEmailComponent,
        EditStudentComponent,
        ConfirmModalComponent,
        SignupGraphComponent,
        GenderChartComponent,
        StatsComponent
      ],
      providers: [StudentService, AuthService, AuthGuard, {provide: APP_BASE_HREF, useValue: '/'}],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
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

  it('edit switch enables edit mode', () => {
    component.editSwitch();
    expect(component.editMode).toBe(true);
  })

});
