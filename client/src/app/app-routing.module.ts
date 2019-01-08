import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CallbackComponent} from "./components/callback/callback.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {StudentComponent} from "./components/student/student.component";
import {ViewStudentsComponent} from "./components/view-students/view-students.component";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'addstudent',
    component: StudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewstudents',
    component: ViewStudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
