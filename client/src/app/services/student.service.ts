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

  // addCV(id: number, cv: any) {
  //   let token = localStorage.getItem('access_token');
  //   let httpOptions = {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //       .set('Authorization', 'Bearer ' + token)
  //   };
  //   let body = JSON.stringify(student);
  //   return this.http.post('/server/api/students', body, httpOptions)
  // }

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

  uploadCV(cv: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('cv', cv);

    const req = new HttpRequest('POST', '/server/api/students/cv/201', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  getAttachments(id) {
    id = 201;
    return this.http.get('server/api/students/attachments/' + id,
      {headers: StudentService.getAuthHeader()}
    );
  }

  downloadFile(file:String){
    var body = {filename:file};

    // return this.http.post('/server/api/students/attachments/201',body,{
    //   responseType : 'blob',
    //   headers:new HttpHeaders().append('Content-Type','application/json')
    // });
    return this.http.get('server/api/students/attachments/201' ,
        {headers: StudentService.getAuthHeader()}
      );
  }

}

