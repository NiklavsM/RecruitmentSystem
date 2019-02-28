import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public http: HttpClient) {
  }

  sendEmail(email: any) {
    let token = localStorage.getItem('access_token');
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
    let body = JSON.stringify(email);
    return this.http.post('/server/secure/email', body, httpOptions)
  }
}
