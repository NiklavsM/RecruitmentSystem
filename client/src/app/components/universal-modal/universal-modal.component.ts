import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-universal-modal',
  templateUrl: './universal-modal.component.html',
  styleUrls: ['./universal-modal.component.scss']
})
export class UniversalModalComponent implements OnInit {

  @Input()
  public headerText;
  @Input()
  public bodyText;
  @Input()
  public footerText;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {

  }

}
