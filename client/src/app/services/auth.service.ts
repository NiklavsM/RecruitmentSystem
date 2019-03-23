import {Injectable} from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: environment.CLIENT_ID,
    domain: 'niklavs.eu.auth0.com',
    responseType: 'token id_token',
    audience: environment.audience,
    redirectUri: environment.API_URL + '/logincallback'
  });

  // Opens login section
  public login(): void {
    this.auth0.authorize();
  }

  // Tries to authenticate the user
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      }
    });
  }

  // On successful authentication stores the login data
  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
      localStorage.setItem('roles', user['https://recruitmentapp.com/roles']);
    });
  }

  // Logs out the user both locally and from auth0 server
  public logout(): void {
    this.auth0.logout();
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('roles');
  }

  // Checks if user is authenticated
  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  // Checks if user has a given role
  public hasAccess(role: string): boolean {
    const roles = localStorage.getItem('roles');
    if (roles) {
      return roles.indexOf(role) > -1 && this.isAuthenticated();
    } else {
      return false;
    }
  }

}
