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
import {ViewStudentComponent} from './components/view-student/view-student.component';
import {SendEmailComponent} from './components/send-email/send-email.component';
import {EditStudentComponent} from './components/edit-student/edit-student.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ChartsModule } from 'ng2-charts';
import { SignupGraphComponent } from './components/signup-graph/signup-graph.component';
import { GenderChartComponent } from './components/gender-chart/gender-chart.component';

@NgModule({
  entryComponents: [SendEmailComponent, ConfirmModalComponent],
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
    GenderChartComponent
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
    ChartsModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [StudentService, AuthService, AuthGuard, {provide: 'apiKey', useValue: '86bofoe4nwku0q'}],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {
}
