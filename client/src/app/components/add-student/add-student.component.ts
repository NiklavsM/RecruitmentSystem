import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      university : new FormControl('', Validators.required),
      gradYear : new FormControl('', Validators.required),
      course : new FormControl('', Validators.required)
    });
  }

  submitRegistration(){
    if(this.studentForm.valid){
      this.studentService.createStudent(this.studentForm.value).subscribe(
        data => {this.studentForm.reset();
        return true;
        },
        error => {
          return Observable.throw(error); //TODO
        }
      )
    }else{
      //TODO change message
    }
  }

}
