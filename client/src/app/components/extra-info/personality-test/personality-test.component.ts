import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {

  private personalityForm: FormGroup;
  private statements: string[];

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personalityForm = new FormGroup({
      s1: new FormControl(),
      s2: new FormControl(),
      s3: new FormControl(),
      s4: new FormControl(),
      s5: new FormControl(),
      s6: new FormControl(),
    });
    this.statements = ["Am the life of the party", "Feel little concern for others",
      "Am always prepared", "Get stressed out easily",
      "Have a rich vocabulary", "Don't talk a lot"]
  }

  submitSurvey() {
    if (this.personalityForm.valid) {
      this.studentService.uploadSurvey(this.personalityForm.value, this.route.snapshot.params.token).subscribe(
        data => {
          console.log("Survey submitted");
          return true;
        },
        error => {
          return Observable.throw(error); // TODO
        }
      )
    }
  }
}
