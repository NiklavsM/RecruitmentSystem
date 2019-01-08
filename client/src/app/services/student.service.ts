import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";



@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get('server/api/students',
      {headers: StudentService.getAuthHeader()}
      );
  }

  getStudent(id: number) {
    return this.http.get('server/api/students/' + id,
      {headers: StudentService.getAuthHeader()}
      );
  }

  createStudent(student) {
    let token = localStorage.getItem('access_token');
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
    let body = JSON.stringify(student);
    return this.http.post('/server/api/students', body, httpOptions)
  }

  private static getAuthHeader(){
    let token = localStorage.getItem('access_token');
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
}
