import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public http: HttpClient) {
  }

  // Sends email to the backend to be sent to the recipient
  sendEmail(email: any) {
    const token = localStorage.getItem('access_token');
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
    const body = JSON.stringify(email);
    return this.http.post('/server/secure/email', body, httpOptions);
  }
}
