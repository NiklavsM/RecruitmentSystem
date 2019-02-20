import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {SettingsService} from "./services/settings.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private settings : any;

  constructor(public authService: AuthService, private settingsService: SettingsService) {
    authService.handleAuthentication();
  }

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe(
      data => {
        this.settings = data;
      }, error => {
      })
  }
}
