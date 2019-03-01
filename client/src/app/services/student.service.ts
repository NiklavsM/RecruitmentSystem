import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class StudentService {

  constructor(public http: HttpClient) {
  }

  getStudents(filters?: any) {
    if (filters) {
      const body = JSON.stringify(filters);
      return this.http.post('server/secure/students', body, this.getHttpOptions());
    }
    return this.http.get('server/secure/students', this.getHttpOptions());
  }

  getStudent(id: string) {
    return this.http.get('server/secure/students/' + id, this.getHttpOptions());
  }

  deleteStudent(id: string) {
    return this.http.post('server/secure/students/delete/' + id, this.getHttpOptions());
  }

  deleteAttachment(id: string) {
    return this.http.post('server/secure/students/attachments/delete/' + id, this.getHttpOptions());
  }

  deleteStudents(ids: string[]) {
    const body = JSON.stringify(ids);
    return this.http.post('server/secure/students/delete', body, this.getHttpOptions());
  }

  createStudent(student: any) {
    const body = JSON.stringify(student);
    if (student.id) {
      return this.http.post('/server/secure/students/update', body, this.getHttpOptions(true));
    }
    return this.http.post('/server/public/students/create', body, this.getHttpOptions(true));
  }

  getAttachments(id: string) {
    return this.http.get('server/secure/students/attachments/' + id, this.getHttpOptions());
  }

  uploadSurvey(survey: any, authToken: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', }).set('Authorization', authToken),
      responseType: 'text' as 'text'
    };
    const body = JSON.stringify(survey);
    return this.http.post('/server/public/students/survey/', body, httpOptions);
  }

  getSurvey(id: string) {
    return this.http.get('server/secure/students/student/survey/' + id, this.getHttpOptions()
    );
  }

  private getHttpOptions(textResponse?: boolean) {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    let httpOptions = {};
    if (textResponse) {
      httpOptions = {headers: headers.set('Authorization', 'Bearer ' + token), responseType: 'text' as 'text'};
    } else {
      httpOptions = {headers: headers.set('Authorization', 'Bearer ' + token)};
    }
    return httpOptions;
  }

}

