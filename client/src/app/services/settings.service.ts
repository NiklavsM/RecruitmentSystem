import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  constructor(public http: HttpClient) {
  }

  // Gets settings from the backend
  public getSettings() {
    return this.http.get('/server/public/settings', this.getOptions());
  }

  // Sets new settings
  public setSettings(settings: any) {
    const body = JSON.stringify(settings);
    return this.http.post('/server/secure/settings', body, this.getOptions());
  }

  // Returns options to be used when making the server API call
  private getOptions() {
    const token = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
  }
}
