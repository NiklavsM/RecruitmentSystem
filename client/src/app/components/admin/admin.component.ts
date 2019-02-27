import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SettingsService} from "../../services/settings.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  settingsForm: FormGroup;
  settings: any = {companyName: ''};

  constructor(public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsForm = new FormGroup({
      id: new FormControl(1),
      companyName: new FormControl(this.settings.companyName, Validators.required)
    });
    this.settingsService.getSettings().subscribe(data => {
        if (data) {
          this.settings = data;
        }
      },
      err => console.error(err))
  }

  saveSettings() {
    if (this.settingsForm.valid) {
      this.settingsService.setSettings(this.settingsForm.value).subscribe(
        data => {
          window.location.reload();
          console.log("Settings submitted "); // TODO make a popup
          return true;
        },
        error => {
          return Observable.throw(error); // TODO
        }
      );
    } else {
      // TODO change message
    }
  }
}
