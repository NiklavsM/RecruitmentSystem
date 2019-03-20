import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExtraInfoComponent} from './extra-info.component';
import {PersonalityTestComponent} from "./personality-test/personality-test.component";
import {FileUploadModule} from "ng2-file-upload";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

describe('ExtraInfoComponent', () => {
  let component: ExtraInfoComponent;
  let fixture: ComponentFixture<ExtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraInfoComponent, PersonalityTestComponent],
      imports: [FileUploadModule, ReactiveFormsModule, RouterModule.forRoot([])],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
