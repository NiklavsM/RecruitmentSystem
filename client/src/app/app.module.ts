import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import {ModalComponent, NgbdModalContent} from './components/modal/modal.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  entryComponents: [NgbdModalContent, SendEmailComponent],
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
    ModalComponent,
    NgbdModalContent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule
  ],
  providers: [StudentService, AuthService, AuthGuard, {provide: 'apiKey', useValue: '86bofoe4nwku0q'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
