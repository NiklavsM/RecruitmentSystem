import {Component} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {saveAs} from 'file-saver';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent {

  uploader: FileUploader = new FileUploader({url: "/server/api/students/attachments"});


  constructor(private route: ActivatedRoute) {
    this.uploader.setOptions({
      authToken: this.route.snapshot.params.token,
      maxFileSize: 10485760, // 10 MB
      allowedFileType: ['pdf', 'docx']
    })
  }

}
