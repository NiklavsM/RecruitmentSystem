import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendEmail(email : any) {

    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + "TOKEN ") // TODO Token
    };
    let body = JSON.stringify(email);
    return this.http.post('/server/api/email', body, httpOptions)
  }
}
