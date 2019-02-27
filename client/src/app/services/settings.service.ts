import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private token = localStorage.getItem('access_token');
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
      .set('Authorization', 'Bearer ' + this.token)
  };

  constructor(public http: HttpClient) {
  }

  public getSettings() {
    return this.http.get('/server/public/settings', this.httpOptions)
  }

  public setSettings(settings: any) {
    let body = JSON.stringify(settings);
    return this.http.post('/server/secure/settings', body, this.httpOptions)
  }
}
