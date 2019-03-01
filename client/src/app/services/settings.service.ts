import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  constructor(public http: HttpClient) {
  }

  public getSettings() {
    return this.http.get('/server/public/settings', this.getOptions());
  }

  public setSettings(settings: any) {
    const body = JSON.stringify(settings);
    return this.http.post('/server/secure/settings', body, this.getOptions());
  }

  private getOptions() {
    const token = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
  }
}
