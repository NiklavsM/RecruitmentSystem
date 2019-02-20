import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CallbackComponent} from './components/callback/callback.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './services/auth.guard';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {ViewStudentsComponent} from './components/view-students/view-students.component';
import {AdminComponent} from './components/admin/admin.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ViewStudentComponent} from './components/view-students/view-student/view-student.component';
import {SendEmailComponent} from './components/view-students/view-student/send-email/send-email.component';
import {StatsComponent} from "./components/stats/stats.component";
import {ExtraInfoComponent} from "./components/extra-info/extra-info.component";

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
    path: 'viewstudents/:id',
    component: ViewStudentComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'viewstudents',
    component: ViewStudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'email/:email',
    component: SendEmailComponent,
    // canActivate: [AuthGuard]
  },

  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'extrainfo/:token',
    component: ExtraInfoComponent,
    // canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
