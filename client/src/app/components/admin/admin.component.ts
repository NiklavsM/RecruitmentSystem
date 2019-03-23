import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SettingsService} from '../../services/settings.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UniversalModalComponent} from '../universal-modal/universal-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  settingsForm: FormGroup;
  settings: any = {companyName: ''};
  submitted = false;

  constructor(public settingsService: SettingsService, public modal: NgbModal) {
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
    });
  }

  saveSettings() {
    if (this.settingsForm.valid) {
      this.settingsService.setSettings(this.settingsForm.value).subscribe(
        data => {
          window.location.reload();
        },
        error => {
          this.openModal('Failed to save settings');
        }
      );
    }
    this.submitted = true;
  }

  openModal(text: string) {
    const modal = this.modal.open(UniversalModalComponent);
    modal.componentInstance.body = text;
  }

  get f() {
    return this.settingsForm.controls;
  }

}
