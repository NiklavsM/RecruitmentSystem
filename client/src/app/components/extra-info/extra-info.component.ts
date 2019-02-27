import {Component} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent {

  public uploader: FileUploader = new FileUploader({url: "/server/public/students/attachments"}); // TODO move to service
  public survey = false;


  constructor(public route: ActivatedRoute) {
    this.uploader.setOptions({
      authToken: this.route.snapshot.params.token,
      maxFileSize: 10485760, // 10 MB
      allowedFileType: ['pdf', 'docx', 'doc']
    });
  }

}
