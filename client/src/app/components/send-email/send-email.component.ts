import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {EmailService} from '../../services/email.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  @Input()
  student: any;

  emailForm: FormGroup;

  constructor(private route: ActivatedRoute, private emailService: EmailService, public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.emailForm = new FormGroup({
      emailTo: new FormControl(this.student.email, Validators.required),
      emailText: new FormControl('', Validators.required),
    });
  }

  sendEmail() {
    console.log('HEREEE0', this.emailForm, this.emailForm.valid);
    if (this.emailForm.valid) {
      console.log('HEREEE');
      this.emailService.sendEmail(this.emailForm.value).subscribe(
        data => {
          this.emailForm.reset();
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

}
