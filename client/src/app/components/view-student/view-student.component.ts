import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute} from '@angular/router';
import {SendEmailComponent} from '../send-email/send-email.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  public student;
  public editMode = false;
  public emailMode = false;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params.id);
  }

  getStudent(id: number) {
    this.studentService.getStudent(id).subscribe(
      data => {
        this.student = data;
      },
      err => console.error(err),
      () => console.log('student loaded')
    );
  }

  editSwitch() {
    this.editMode = !this.editMode;
  }

  open() {
    const modalRef = this.modalService.open(SendEmailComponent);
    modalRef.componentInstance.student = this.student;
  }

}
