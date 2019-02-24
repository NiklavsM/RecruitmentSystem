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
    console.log("Filters ", filters)
    if (filters) {
      let body = JSON.stringify(filters);
      return this.http.post('server/api/students', body, this.httpOptions);
    }
    return this.http.get('server/api/students', this.httpOptions)
  }

  getStudent(id: string) {
    return this.http.get('server/api/students/' + id, this.httpOptions
    );
  }

  deleteStudent(id: string) {
    return this.http.post('server/api/students/delete/' + id, this.httpOptions
    );
  }

  deleteAttachment(id: string) {
    return this.http.post('server/api/students/attachments/delete/' + id, this.httpOptions
    );
  }

  deleteStudents(ids: string[]) {
    let body = JSON.stringify(ids);
    return this.http.post('server/api/students/delete', body, this.httpOptions
    );
  }

  createStudent(student: any) {
    let body = JSON.stringify(student);
    return this.http.post('/server/api/students/create', body, this.httpOptions)
  }

  getAttachments(id: string) {
    return this.http.get('server/api/students/attachments/' + id, this.httpOptions
    );
  }

  uploadSurvey(survey: any, authToken: string) {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}).set('Authorization', authToken),
      responseType: 'text' as 'text'
    };
    let body = JSON.stringify(survey);
    return this.http.post('/server/api/students/survey/', body, httpOptions)
  }

  getSurvey(id: string) {
    return this.http.get('server/api/students/student/survey/' + id, this.httpOptions
    );
  }

}

