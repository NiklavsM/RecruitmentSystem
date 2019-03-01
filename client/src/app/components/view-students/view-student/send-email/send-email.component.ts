import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../../../../services/email.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UniversalModalComponent} from "../../../universal-modal/universal-modal.component";

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  @Input()
  student: any;
  @Input()
  companyName: string;

  emailForm: FormGroup;

  constructor(public route: ActivatedRoute, public emailService: EmailService, public activeModal: NgbActiveModal, public modal: NgbModal) {
  }

  ngOnInit() {
    this.emailForm = new FormGroup({
      emailTo: new FormControl(this.student.email, Validators.required),
      subject: new FormControl(this.companyName),
      body: new FormControl('', Validators.required),
    });
  }

  sendEmail() {
    if (this.emailForm.valid) {
      this.emailService.sendEmail(this.emailForm.value).subscribe(
        data => {
          this.activeModal.close();
          this.openSuccessModal();
        },
        error => {
          return console.log('error ', error); //TODO
        }
      );
    } else {
      // TODO change message
    }
  }

  openSuccessModal() {
    const modal = this.modal.open(UniversalModalComponent);
    modal.componentInstance.body = "Email sent"
  }

}
