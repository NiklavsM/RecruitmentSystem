import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-universal-modal',
  templateUrl: './universal-modal.component.html',
  styleUrls: ['./universal-modal.component.scss']
})
export class UniversalModalComponent {

  @Input()
  public header: string;
  @Input()
  public body: string;
  @Input()
  public footer: string;

  constructor(public activeModal: NgbActiveModal) {
  }

}
