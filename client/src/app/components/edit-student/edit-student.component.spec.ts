import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditStudentComponent} from './edit-student.component';
import {StudentService} from "../../services/student.service";
import {ReactiveFormsModule} from "@angular/forms";
import {Globals} from "../../globals";
import {NgSelectModule} from "@ng-select/ng-select";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditStudentComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, NgSelectModule],
      providers: [Globals, StudentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
