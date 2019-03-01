import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SendEmailComponent} from './send-email/send-email.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {saveAs} from 'file-saver';
import {UniversalModalComponent} from "../../universal-modal/universal-modal.component";
import {SettingsService} from "../../../services/settings.service";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  public student;
  public editMode = false;
  studentId: string;
  attachments: any;
  companyName: string;

  constructor(public studentService: StudentService, public router: Router, public route: ActivatedRoute, public modalService: NgbModal, public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.studentId = this.route.snapshot.params.id;
    this.getStudent(this.studentId);
    this.getCompanyName();
  }

  private getStudent(id: string) {
    this.studentService.getStudent(id).subscribe(
      data => {
        this.student = data;
      },
    );
    this.studentService.getAttachments(id).subscribe(
      data => {
        this.attachments = data;
      }
    );
  }

  private deleteStudent() {
    this.studentService.deleteStudent(this.studentId).subscribe();
  }

  public deleteAttachment(id: string) {
    this.studentService.deleteAttachment(id).subscribe();
    this.attachments = this.attachments.filter(o => o.id != id);
  }

  public editSwitch() {
    this.editMode = !this.editMode;
  }

  public openEmailModal() {
    const modalRef = this.modalService.open(SendEmailComponent);
    modalRef.componentInstance.student = this.student;
    modalRef.componentInstance.companyName = this.companyName;
  }

  public openDeleteModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(result => {
      this.deleteStudent();
      this.router.navigateByUrl('/viewstudents');
    }, reason => {
    });
    modalRef.componentInstance.students = [this.student];
  }

  public openSaveModal(message: string) {
    const modalRef = this.modalService.open(UniversalModalComponent);
    modalRef.componentInstance.body = message;
  }


  private getCompanyName() {
    this.settingsService.getSettings().subscribe(data => {
      this.companyName = data['companyName'];
    })
  }
}
