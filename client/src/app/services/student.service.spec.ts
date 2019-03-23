import {StudentService} from './student.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('StudentService', () => {

  let service: StudentService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [StudentService]
  }));

  beforeEach(() => {
    service = TestBed.get(StudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Delete student works', () => {
    service.deleteStudent('1');
  });

  it('Delete students works', () => {
    service.deleteStudents(['1', '2']);
  });

  it('Get student works', () => {
    service.getStudent('1');
  });

  it('Get students no filter works', () => {
    service.getStudents();
  });

  it('Get students with filter works', () => {
    service.getStudents({});
  });

  it('Delete attachment works', () => {
    service.deleteAttachment('1');
  });

  it('Get attachments works', () => {
    service.getAttachments('1');
  });

  it('Create student works', () => {
    service.createStudent({});
  });

  it('Update student works', () => {
    service.createStudent({id: 1});
  });

  it('Get survey works', () => {
    service.getSurvey('1');
  });

  it('Upload survey works', () => {
    service.uploadSurvey({}, 'token');
  });

});
