import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
    }
  }

}
