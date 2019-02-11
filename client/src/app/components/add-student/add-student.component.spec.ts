import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentComponent } from './add-student.component';
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
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
import {AppComponent} from "../../app.component";
import {LinkedinComponent} from "../linkedin/linkedin.component";
import {CallbackComponent} from "../callback/callback.component";
import {HomeComponent} from "../home/home.component";
import {ViewStudentsComponent} from "../view-students/view-students.component";
import {AdminComponent} from "../admin/admin.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {ProfileComponent} from "../profile/profile.component";
import {ViewStudentComponent} from "../view-student/view-student.component";
import {SendEmailComponent} from "../send-email/send-email.component";
import {EditStudentComponent} from "../edit-student/edit-student.component";
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {SignupGraphComponent} from "../signup-graph/signup-graph.component";
import {GenderChartComponent} from "../gender-chart/gender-chart.component";
import {StatsComponent} from "../stats/stats.component";
import {StudentService} from "../../services/student.service";
import {AuthService} from "../../services/auth.service";
import {AuthGuard} from "../../services/auth.guard";
import {APP_BASE_HREF} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

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
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
