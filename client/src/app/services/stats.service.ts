import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Globals} from "../globals";

@Injectable()
export class StatsService {

  private token = localStorage.getItem('access_token');
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
      .set('Authorization', 'Bearer ' + this.token)
  };

  constructor(private http: HttpClient, private gl: Globals) {
  }

  public getGenderStats() {
    let body = JSON.stringify(this.gl.genders);
    return this.http.post('server/secure/stats/genderstats', body, this.httpOptions);
  }

  public getSignupStats(dates: any) {
    let body = JSON.stringify(dates);
    return this.http.post('server/secure/stats/signupstats', body, this.httpOptions);
  }

  public getEthnicityStats() {
    let body = JSON.stringify(this.gl.ethnicities);
    return this.http.post('server/secure/stats/ethnicitystats', body, this.httpOptions);
  }
}
