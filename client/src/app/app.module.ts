import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {LinkedinComponent} from './components/linkedin/linkedin.component';
import {CallbackComponent} from './components/callback/callback.component'
import {AuthService} from './services/auth.service';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './services/auth.guard';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {StudentService} from './services/student.service';
import {HttpClientModule} from '@angular/common/http';
import {ViewStudentsComponent} from './components/view-students/view-students.component';
import {AdminComponent} from './components/admin/admin.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ViewStudentComponent} from './components/view-students/view-student/view-student.component';
import {SendEmailComponent} from './components/view-students/view-student/send-email/send-email.component';
import {EditStudentComponent} from './components/edit-student/edit-student.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule, MatNativeDateModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmModalComponent} from './components/view-students/confirm-modal/confirm-modal.component';
import {ChartsModule} from 'ng2-charts';
import {SignupGraphComponent} from './components/stats/signup-graph/signup-graph.component';
import {GenderChartComponent} from './components/stats/gender-chart/gender-chart.component';
import {MatTableModule} from '@angular/material/table';
import {StatsComponent} from './components/stats/stats.component';
import {ExtraInfoComponent} from './components/extra-info/extra-info.component';
import {FileUploadModule} from "ng2-file-upload";
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {PersonalityTestComponent} from './components/extra-info/personality-test/personality-test.component';
import {StatsService} from "./services/stats.service";
import {PeronalityChartComponent} from './components/view-students/view-student/peronality-chart/peronality-chart.component';
import {PersonalityTraitDescriptionComponent} from './components/view-students/view-student/peronality-chart/personality-trait-description/personality-trait-description.component';
import {Globals} from "./globals";
import {EthnicityChartComponent} from './components/stats/ethnicity-chart/ethnicity-chart.component';
import {UniversalModalComponent} from './components/universal-modal/universal-modal.component';

@NgModule({
  entryComponents: [SendEmailComponent, ConfirmModalComponent, PersonalityTraitDescriptionComponent, UniversalModalComponent],
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
    StatsComponent,
    ExtraInfoComponent,
    FileUploadComponent,
    PersonalityTestComponent,
    PeronalityChartComponent,
    PersonalityTraitDescriptionComponent,
    EthnicityChartComponent,
    UniversalModalComponent
  ],
  imports: [
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
    MatSortModule,
    FileUploadModule,
    MatCheckboxModule
  ],
  exports: [
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: [Globals, StudentService, StatsService, AuthService, AuthGuard, {
    provide: 'apiKey',
    useValue: '86bofoe4nwku0q'
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule {
}
