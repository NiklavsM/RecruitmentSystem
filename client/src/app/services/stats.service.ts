import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class StatsService {
  constructor(private http: HttpClient) {
  }

  public getGenderStats() {
    return this.http.get('server/api/stats/genderstats');
  }

  public getSignupStats(dates: any) {
    let token = localStorage.getItem('access_token');
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
    let body = JSON.stringify(dates);
    return this.http.post('server/api/stats/signupstats', body, httpOptions);
  }
}
