import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalityTestComponent} from './personality-test.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StudentService} from "../../../services/student.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {Globals} from "../../../globals";

describe('PersonalityTestComponent', () => {
  let component: PersonalityTestComponent;
  let fixture: ComponentFixture<PersonalityTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalityTestComponent],
      imports: [HttpClientModule,RouterModule.forRoot([]), ReactiveFormsModule],
      providers: [StudentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
