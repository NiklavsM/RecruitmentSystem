import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginCallbackComponent} from './components/login-callback/login-callback.component';
import {AuthGuard} from './services/auth.guard';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {ViewStudentsComponent} from './components/view-students/view-students.component';
import {AdminComponent} from './components/admin/admin.component';
import {ViewStudentComponent} from './components/view-students/view-student/view-student.component';
import {SendEmailComponent} from './components/view-students/view-student/send-email/send-email.component';
import {StatsComponent} from './components/stats/stats.component';
import {ExtraInfoComponent} from './components/extra-info/extra-info.component';
import {LogoutCallbackComponent} from './components/logout-callback/logout-callback.component';

const routes: Routes = [
  {
    path: 'logincallback',
    component: LoginCallbackComponent
  },
  // {
  //   path: 'login/logincallback',
  //   component: LoginCallbackComponent
  // },
  {
    path: 'logoutcallback',
    component: LogoutCallbackComponent
  },
  {
    path: 'addstudent/qrcode',
    component: AddStudentComponent,
  },
  {
    path: 'addstudent',
    component: AddStudentComponent,
  },
  {
    path: 'addstudent/qrcode',
    component: AddStudentComponent,
  },
  {
    path: 'viewstudents/:id',
    component: ViewStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewstudents',
    component: ViewStudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'email/:email',
    component: SendEmailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'extrainfo/:token',
    component: ExtraInfoComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
