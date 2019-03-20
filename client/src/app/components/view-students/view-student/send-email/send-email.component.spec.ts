import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SendEmailComponent} from './send-email.component';
import {EmailService} from "../../../../services/email.service";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SendEmailComponent', () => {
  let component: SendEmailComponent;
  let fixture: ComponentFixture<SendEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SendEmailComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterModule.forRoot([])],
      providers: [EmailService, NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailComponent);
    component = fixture.componentInstance;
    component.student = {email: "email@email.com"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
