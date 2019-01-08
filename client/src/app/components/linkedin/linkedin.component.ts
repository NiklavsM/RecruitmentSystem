import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent {

  client_id: String = '86bofoe4nwku0q';
  redirect_uri:String = encodeURI("http://localhost:8080/api/students");
  url: String = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${this.client_id}&redirect_uri=${this.redirect_uri}`;

}
