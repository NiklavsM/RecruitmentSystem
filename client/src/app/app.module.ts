import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedinComponent } from './linkedin/linkedin.component'
@NgModule({
  declarations: [
    AppComponent,
    LinkedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'apiKey', useValue: '86bofoe4nwku0q' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
