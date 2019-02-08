import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SendEmailComponent} from '../send-email/send-email.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  public student;
  public editMode = false;
  public emailMode = false;
  private studentId: number;


  constructor(private studentService: StudentService,private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.studentId = this.route.snapshot.params.id;
    this.getStudent(this.studentId);
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

  deleteStudent(){
    this.studentService.deleteStudent(this.studentId).subscribe();
  }

  editSwitch() {
    this.editMode = !this.editMode;
  }

  open(name: string) {
    if(name == 'email') {
      const modalRef = this.modalService.open(SendEmailComponent);
      modalRef.componentInstance.student = this.student;
    }
    if(name == 'delete'){
      const modalRef = this.modalService.open(ConfirmModalComponent);
      modalRef.result.then(result => {
        this.deleteStudent();
        this.router.navigateByUrl('/viewstudents');
      },reason => {});
      modalRef.componentInstance.student = this.student;
    }
  }

}
