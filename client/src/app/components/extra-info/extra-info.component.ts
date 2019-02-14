import {Component} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {FileUploader} from "ng2-file-upload";
import {saveAs} from 'file-saver';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent {

  private accessToken: any;

  uploader:FileUploader = new FileUploader({url: "/server/api/students/attachments/201"});


  constructor(private route: ActivatedRoute){
    // this.accessToken = this.route.snapshot.params.id;
    // this.uploader.authToken = this.route.snapshot.params.id;
  }

}
