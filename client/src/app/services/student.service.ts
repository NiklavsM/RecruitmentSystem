import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


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

  deleteStudent(id: number) {
    return this.http.post('server/api/students/delete/' + id,
      {headers: StudentService.getAuthHeader()}
    );
  }

  createStudent(student: any) {
    let token = localStorage.getItem('access_token');
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
        .set('Authorization', 'Bearer ' + token)
    };
    let body = JSON.stringify(student);
    return this.http.post('/server/api/students', body, httpOptions)
  }

  private static getAuthHeader() {
    let token = localStorage.getItem('access_token');
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  getAttachments(id: number) {
    return this.http.get('server/api/students/attachments/' + id,
      {headers: StudentService.getAuthHeader()}
    );
  }

  uploadSurvey(survey: any, authToken: string) {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization', authToken)
    };
    let body = JSON.stringify(survey);
    return this.http.post('/server/api/students/survey/', body, httpOptions)
  }

  getSurvey(id: number) {
    return this.http.get('server/api/students/student/survey/' + id,
      {headers: StudentService.getAuthHeader()}
    );
  }

}

