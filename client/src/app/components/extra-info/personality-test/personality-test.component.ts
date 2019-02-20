import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    this.buildControlsObject();
    this.personalityForm = new FormGroup(this.buildControlsObject());
    this.statements = [
      "Am the life of the party"
      , "Feel little concern for others"
      , "Am always prepared"
      , "Get stressed out easily"
      , "Have a rich vocabulary"
      , "Don't talk a lot"
      , "Am interested in people"
      , "Leave my belongings around"
      , "Am relaxed most of the time"
      , "Have difficulty understanding abstract ideas"
      , "Feel comfortable around people"
      , "Insult people"
      , "Pay attention to details"
      , "Worry about things"
      , "Have a vivid imagination"
      , "Keep in the background"
      , "Sympathize with others' feelings"
      , "Make a mess of things"
      , "Seldom feel blue"
      , "Am not interested in abstract ideas"
      , "Start conversations"
      , "Am not interested in other people's problems"
      , "Get chores done right away"
      , "Am easily disturbed"
      , "Have excellent ideas"
      , "Have little to say"
      , "Have a soft heart"
      , "Often forget to put things back in their proper place"
      , "Get upset easily"
      , "Do not have a good imagination"
      , "Talk to a lot of different people at parties"
      , "Am not really interested in others"
      , "Like order"
      , "Change my mood a lot"
      , "Am quick to understand things"
      , "Don't like to draw attention to myself"
      , "Take time out for others"
      , "Shirk my duties"
      , "Have frequent mood swings"
      , "Use difficult words"
      , "Don't mind being the center of attention"
      , "Feel others' emotions"
      , "Follow a schedule"
      , "Get irritated easily"
      , "Spend time reflecting on things"
      , "Am quiet around strangers"
      , "Make people feel at ease"
      , "Am exacting in my work"
      , "Often feel blue"
      , "Am full of ideas"
    ]
  }

  private buildControlsObject() {
    let controlsObject = {};
    for (let i = 0; i < 50; i++) {
      controlsObject['s' + (i+1)] = new FormControl(Validators.required);
    }
    console.log("controlsObject ", controlsObject);
    return controlsObject;
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
