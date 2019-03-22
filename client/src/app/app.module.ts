import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SendEmailComponent} from './components/view-students/view-student/send-email/send-email.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {ConfirmModalComponent} from './components/view-students/confirm-modal/confirm-modal.component';
import {PersonalityTraitDescriptionComponent} from './components/view-students/view-student/peronality-chart/personality-trait-description/personality-trait-description.component';
import {UniversalModalComponent} from './components/universal-modal/universal-modal.component';
import {LoginCallbackComponent} from "./components/login-callback/login-callback.component";
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {ViewStudentsComponent} from "./components/view-students/view-students.component";
import {AdminComponent} from "./components/admin/admin.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ViewStudentComponent} from "./components/view-students/view-student/view-student.component";
import {EditStudentComponent} from "./components/edit-student/edit-student.component";
import {SignupGraphComponent} from "./components/stats/signup-graph/signup-graph.component";
import {GenderChartComponent} from "./components/stats/gender-chart/gender-chart.component";
import {StatsComponent} from "./components/stats/stats.component";
import {ExtraInfoComponent} from "./components/extra-info/extra-info.component";
import {PersonalityTestComponent} from "./components/extra-info/personality-test/personality-test.component";
import {PersonalityChartComponent} from "./components/view-students/view-student/peronality-chart/personality-chart.component";
import {EthnicityChartComponent} from "./components/stats/ethnicity-chart/ethnicity-chart.component";
import {LogoutCallbackComponent} from "./components/logout-callback/logout-callback.component";
import {HomeComponent} from "./components/home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbActiveModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ChartsModule} from "ng2-charts";
import {FileUploadModule} from "ng2-file-upload";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {NgSelectModule} from "@ng-select/ng-select";
import {Globals} from "./globals";
import {StudentService} from "./services/student.service";
import {StatsService} from "./services/stats.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth.guard";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  entryComponents: [SendEmailComponent, ConfirmModalComponent, PersonalityTraitDescriptionComponent, UniversalModalComponent],
  declarations: [
    AppComponent,
    LoginCallbackComponent,
    AddStudentComponent,
    ViewStudentsComponent,
    AdminComponent,
    NavbarComponent,
    ViewStudentComponent,
    SendEmailComponent,
    EditStudentComponent,
    ConfirmModalComponent,
    SignupGraphComponent,
    GenderChartComponent,
    StatsComponent,
    ExtraInfoComponent,
    PersonalityTestComponent,
    PersonalityChartComponent,
    PersonalityTraitDescriptionComponent,
    EthnicityChartComponent,
    UniversalModalComponent,
    LogoutCallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    NgbModalModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FileUploadModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // defaults
    }),
    NgSelectModule
  ],
  exports: [
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: [
    Globals, StudentService, StatsService, AuthService, AuthGuard, NgbActiveModal, {
      provide: 'apiKey',
      useValue: '86bofoe4nwku0q'
    }, {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule {
}
