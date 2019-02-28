import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {StudentService} from '../../services/student.service';
import {Globals} from "../../globals";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit, OnChanges {

  @Input() student: any;
  @Input() editMode: boolean;
  @Input() clearOnSubmit = false;
  @Output() onSubmit = new EventEmitter();

  studentForm: FormGroup;

  constructor(public studentService: StudentService, public gl: Globals) {
  }

  ngOnInit() {
    if (!this.student) {
      this.student = {};
    }
    this.studentForm = new FormGroup({
      id: new FormControl(this.student.id),
      firstName: new FormControl(this.student.firstName, Validators.required),
      lastName: new FormControl(this.student.lastName, Validators.required),
      email: new FormControl(this.student.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]), // TODO write about pattern matching
      university: new FormControl(this.student.university, Validators.required),
      gradYear: new FormControl(this.student.gradYear, Validators.required),
      course: new FormControl(this.student.course, Validators.required),
      gender: new FormControl(this.student.gender),
      ethnicity: new FormControl(this.student.ethnicity)
    });
    this.enableEdit(this.editMode);
  }

  submitRegistration() {
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        data => {
          if (this.clearOnSubmit) this.studentForm.reset();
          this.onSubmit.emit(data);
        },
        error => {
           console.log("errorrrrrr  ", error);// TODO
        }
      );
    } else {
      // TODO change message
    }
  }

  enableEdit(enable: boolean) {
    if (this.studentForm) {
      for (let key of Object.keys(this.studentForm.controls)) {
        if (enable) {
          this.studentForm.controls[key].enable();
        } else {
          this.studentForm.controls[key].disable();
        }
      }
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.enableEdit(changes.editMode.currentValue);
  }

}
