import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personality-trait-description',
  templateUrl: './personality-trait-description.component.html',
  styleUrls: ['./personality-trait-description.component.scss']
})
export class PersonalityTraitDescriptionComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
