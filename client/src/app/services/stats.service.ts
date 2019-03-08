import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Globals} from '../globals';

@Injectable()
export class StatsService {

  private token = localStorage.getItem('access_token');
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
      .set('Authorization', 'Bearer ' + this.token)
  };

  constructor(public http: HttpClient, public gl: Globals) {
  }

  // Gets gender stats form the server
  public getGenderStats() {
    const body = JSON.stringify(this.gl.genders);
    return this.http.post('server/secure/stats/genderstats', body, this.httpOptions);
  }

  // Gets signup stats form the server
  public getSignupStats(dates: any) {
    const body = JSON.stringify(dates);
    return this.http.post('server/secure/stats/signupstats', body, this.httpOptions);
  }

  // Gets ethnicity stats form the server
  public getEthnicityStats() {
    const body = JSON.stringify(this.gl.ethnicities);
    return this.http.post('server/secure/stats/ethnicitystats', body, this.httpOptions);
  }
}
