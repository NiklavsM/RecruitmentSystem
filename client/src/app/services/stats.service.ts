import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StatsService {
  constructor(private http: HttpClient) {
  }

  public getGenderChart(){
    return this.http.get('server/api/survey/genderchart');
  }
}
