import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {SettingsService} from './services/settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public settings: any;
  public navBarOn = false;

  constructor(public authService: AuthService, public settingsService: SettingsService, public router: Router) {

    authService.handleAuthentication();
  }

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe(
      data => {
        this.navBarOn = this.showNavBar();
        this.settings = data;
      }, error => {
      });
  }

  // Checks the route to see if to show the navigation bar
  private showNavBar() {
    const noNavBarLinks = ['extrainfo', 'qrcode'];
    for (const i in noNavBarLinks) {
      if (this.router.url.includes(noNavBarLinks[i])) {
        return false;
      }
    }
    return true;
  }
}
