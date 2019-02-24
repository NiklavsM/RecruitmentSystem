import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SendEmailComponent} from './send-email/send-email.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {saveAs} from 'file-saver';
import {UniversalModalComponent} from "../../universal-modal/universal-modal.component";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  public student;
  public editMode = false;
  private studentId: string;
  private attachments: any;

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.studentId = this.route.snapshot.params.id;
    this.getStudent(this.studentId);
  }

  private getStudent(id: string) {
    this.studentService.getStudent(id).subscribe(
      data => {
        this.student = data;
        console.log("Student: ", this.student);
      },
      err => console.error(err),
      () => console.log('student loaded')
    );
    this.studentService.getAttachments(id).subscribe(
      data => {
        this.attachments = data;
        console.log("Attachments: ", this.attachments);
      },
      err => console.error(err),
      () => console.log('student loaded')
    );
  }

  private deleteStudent() {
    this.studentService.deleteStudent(this.studentId).subscribe();
  }

  private deleteAttachment(id: string) {
    this.studentService.deleteAttachment(id).subscribe();
    this.attachments = this.attachments.filter(o => o.id != id);
  }

  private editSwitch() {
    this.editMode = !this.editMode;
  }

  private openEmailModal() {
    const modalRef = this.modalService.open(SendEmailComponent);
    modalRef.componentInstance.student = this.student;
  }

  private openDeleteModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(result => {
      this.deleteStudent();
      this.router.navigateByUrl('/viewstudents');
    }, reason => {
    });
    modalRef.componentInstance.students = [this.student];
  }

  private openSaveModal() {
    const modalRef = this.modalService.open(UniversalModalComponent);
    modalRef.componentInstance.bodyText = "Student successfully updated"
  }


}
