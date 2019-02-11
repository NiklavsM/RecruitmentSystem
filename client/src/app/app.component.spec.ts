import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {LinkedinComponent} from "./components/linkedin/linkedin.component";
import {CallbackComponent} from "./components/callback/callback.component";
import {HomeComponent} from "./components/home/home.component";
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {ViewStudentsComponent} from "./components/view-students/view-students.component";
import {AdminComponent} from "./components/admin/admin.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ViewStudentComponent} from "./components/view-student/view-student.component";
import {SendEmailComponent} from "./components/send-email/send-email.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";
import {ConfirmModalComponent} from "./components/confirm-modal/confirm-modal.component";
import {SignupGraphComponent} from "./components/signup-graph/signup-graph.component";
import {GenderChartComponent} from "./components/gender-chart/gender-chart.component";
import {StatsComponent} from "./components/stats/stats.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
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
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {APP_BASE_HREF} from '@angular/common';
import {StudentService} from "./services/student.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth.guard";

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
