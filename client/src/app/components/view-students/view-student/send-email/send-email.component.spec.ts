import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SendEmailComponent} from './send-email.component';
import {EmailService} from '../../../../services/email.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {UniversalModalComponent} from '../../../universal-modal/universal-modal.component';
import {of} from 'rxjs';

describe('SendEmailComponent', () => {
  let component: SendEmailComponent;
  let fixture: ComponentFixture<SendEmailComponent>;
  let emailService: EmailService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SendEmailComponent, UniversalModalComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterModule.forRoot([]), NgbModalModule],
      providers: [EmailService, NgbActiveModal]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [UniversalModalComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailComponent);
    component = fixture.componentInstance;
    component.student = {email: 'email@email.com'};
    fixture.detectChanges();
    emailService = TestBed.get(EmailService);
    spyOn(emailService, 'sendEmail').and.returnValue(of({data: 'sent'}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On Submit submitted becomes true', () => {
    component.sendEmail();
    expect(component.submitted).toBeTruthy();
  });

  it('Valid forms submission works', () => {
    component.ngOnInit();
    component.emailForm.controls['emailTo'].setValue('email@email.com');
    component.emailForm.controls['subject'].setValue('subject');
    component.emailForm.controls['body'].setValue('body');
    component.sendEmail();
    expect(component.submitted).toBeTruthy();
  });

  it('Open modal works', () => {
    component.openModal('Text');
  });
});
