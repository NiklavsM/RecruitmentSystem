import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CallbackComponent} from './components/callback/callback.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './services/auth.guard';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {ViewStudentsComponent} from './components/view-students/view-students.component';
import {AdminComponent} from './components/admin/admin.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ViewStudentComponent} from './components/view-student/view-student.component';
import {SendEmailComponent} from './components/send-email/send-email.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'login/callback',
    component: CallbackComponent
  }, // TODO for first time loggins
  {
    path: 'addstudent',
    component: AddStudentComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'viewstudents/student/:id',
    component: ViewStudentComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'email/:email',
    component: SendEmailComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'viewstudents',
    component: ViewStudentsComponent,
  //  canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
   // canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
