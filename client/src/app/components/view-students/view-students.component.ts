import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit {
  students: any;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
        this.students = data;
        console.log("Students " + this.students);
      },
      err => console.error(err),
      () => console.log('students loaded'));

  }

}
