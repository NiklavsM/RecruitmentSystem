import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UniversalModalComponent} from "../universal-modal/universal-modal.component";

@Component({
  selector: 'app-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {


  constructor(private modalService: NgbModal) {
  }

  private openModal() {
    const modal = this.modalService.open(UniversalModalComponent);
    modal.componentInstance.bodyText = "Details successfully saved";
  }


}
