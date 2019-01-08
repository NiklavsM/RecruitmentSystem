import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { CallbackComponent } from './components/callback/callback.component'
import { AuthService} from "./services/auth.service";
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from "./services/auth.guard";
import { StudentComponent } from './components/student/student.component';
import {StudentService} from "./services/student.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LinkedinComponent,
    CallbackComponent,
    HomeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService, AuthService, AuthGuard, { provide: 'apiKey', useValue: '86bofoe4nwku0q' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
