import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit, OnChanges {

  @Input() student: any;
  @Input() editMode: boolean;

  public genders: string[];

  studentForm: FormGroup;

  constructor(private studentService: StudentService) {
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
      gender: new FormControl(this.student.gender, Validators.required),
      university: new FormControl(this.student.university, Validators.required),
      gradYear: new FormControl(this.student.gradYear, Validators.required),
      course: new FormControl(this.student.course, Validators.required)
    });
    this.genders = ['Male', 'Female', 'Other', 'Prefer not to say'];
  }

  submitRegistration() {
    console.log('Student ', this.student);
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        data => {
          this.studentForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error); // TODO
        }
      );
    } else {
      // TODO change message
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.editMode = changes.editMode.currentValue;
  }

}
