import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  public student;

  constructor(private studentService : StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id)
}

  getStudent(id:number){
    this.studentService.getStudent(id).subscribe(
      data => {
        this.student = data;
      },
      err => console.error(err),
      () => console.log('student loaded')
    )
  }

}
