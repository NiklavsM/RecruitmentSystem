import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddStudentComponent} from './add-student.component';
import {EditStudentComponent} from '../edit-student/edit-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {StudentService} from '../../services/student.service';
import {Globals} from '../../globals';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UniversalModalComponent} from '../universal-modal/universal-modal.component';
import {NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudentComponent, EditStudentComponent, UniversalModalComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, NgSelectModule, NgbModalModule],
      providers: [StudentService, Globals]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [UniversalModalComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Open modal', () => {
    expect(component.openModal('Hello'));
  });
});
