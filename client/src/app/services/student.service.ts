import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable()
export class StudentService {

  private token = localStorage.getItem('access_token');
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
      .set('Authorization', 'Bearer ' + this.token)
  };

  constructor(private http: HttpClient) {
  }

  getStudents(filters?: any) {
    if (filters) {
      let body = JSON.stringify(filters);
      return this.http.post('server/secure/students', body, this.httpOptions);
    }
    return this.http.get('server/secure/students', this.httpOptions)
  }

  getStudent(id: string) {
    return this.http.get('server/secure/students/' + id, this.httpOptions
    );
  }

  deleteStudent(id: string) {
    return this.http.post('server/secure/students/delete/' + id, this.httpOptions
    );
  }

  deleteAttachment(id: string) {
    return this.http.post('server/secure/students/attachments/delete/' + id, this.httpOptions
    );
  }

  deleteStudents(ids: string[]) {
    let body = JSON.stringify(ids);
    return this.http.post('server/secure/students/delete', body, this.httpOptions
    );
  }

  createStudent(student: any) {
    let body = JSON.stringify(student);
    return this.http.post('/server/public/students/create', body, this.httpOptions)
  }

  getAttachments(id: string) {
    return this.http.get('server/secure/students/attachments/' + id, this.httpOptions
    );
  }

  uploadSurvey(survey: any, authToken: string) {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}).set('Authorization', authToken),
      responseType: 'text' as 'text'
    };
    let body = JSON.stringify(survey);
    return this.http.post('/server/public/students/survey/', body, httpOptions)
  }

  getSurvey(id: string) {
    return this.http.get('server/secure/students/student/survey/' + id, this.httpOptions
    );
  }

}

