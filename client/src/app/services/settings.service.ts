import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) {
  }

  public getSettings() {
    return this.http.get('/server/api/settings')
  }

  public setSettings(settings: any) {
    let token = localStorage.getItem('access_token');
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };

    let body = JSON.stringify(settings);
    return this.http.post('/server/api/settings', body, httpOptions)
  }
}
